import {Inject, Service} from 'typedi';
import serviceABBYY from '../../service/abbyyService';
import azureService from '../../service/azureService';
import {ApolloError} from 'apollo-server-errors';
import ConvertResponse, {INormalizeWordList} from '../../utils/convertResponse';
import {PartOfSpeech} from '../../type-graphql/enums';
import {
  OtherWord,
  TranslateWordWithParseInput,
  TranslateWordWithParseReturn,
  TranslationInput
} from './Translate.types';
import uniqby from 'lodash.uniqby';
import detectPartOfSpeech from '../../utils/partOfSpeech';
import {IAnotherWordList} from '../../typing/ABBYYTypes';
import {PrismaClient} from '@prisma/client';
import {Context} from '../../context';

@Service()
export class TranslateService {
  constructor(@Inject('PRISMA_CONTEXT') private readonly prisma: PrismaClient) {
  }

  async translateWord(word: string) {
    let result = await serviceABBYY.miniCard(word);
    if (result === null) {
      result = await azureService.translate(word);
      if (result === null) {
        throw new ApolloError('No translate', '404')
      }
    }

    return result;
  }

  async translateWordWithParse(word: string) {
    const response: TranslateWordWithParseReturn = {
      words: [],
      irrverb: null,
      backTranslations: [],
      title: word,
      phrases: [],
      sentences: []
    };
    let firstWord: OtherWord = {
      en: word,
      type: await detectPartOfSpeech.getPartOfSpeech(word),
      translate: []
    };

    const dictionary = await azureService.dictionary(word);
    if (dictionary) {
      const convert = ConvertResponse.convertDictionary(dictionary);
      response.backTranslations = convert.backTranslations;
      firstWord.translate.push(...convert.translations);
    }

    let wordList: IAnotherWordList[] | any = await serviceABBYY.wordList(word);
    let convertWordList: INormalizeWordList | null = null;
    if (wordList) {
      convertWordList = ConvertResponse.convertWordList(wordList);
    } else {
      wordList = await serviceABBYY.anotherWordList(word);
      if (wordList) {
        convertWordList = ConvertResponse.anotherConvertWordList(wordList, word);
      }
    }
    if (convertWordList) {
      response.phrases = convertWordList.phrases;
      response.words = convertWordList.words;
    }

    const miniCard = await serviceABBYY.miniCard(word);
    if (miniCard) {
      miniCard.split(',').forEach(mini => {
        firstWord.translate.push({
          type: firstWord.type,
          ru: mini.trim()
        });
      });
    }

    const azureTranslate = await azureService.translate(word);
    if (azureTranslate) {
      firstWord.translate.push({
        type: firstWord.type,
        ru: azureTranslate
      });
    }

    firstWord.translate.forEach(t => t.ru = t.ru.toLowerCase());
    firstWord.translate = uniqby(firstWord.translate, 'ru');
    response.words.unshift(firstWord);
    response.backTranslations = ConvertResponse.removeDuplicate(response.backTranslations, word);
    response.irrverb = await this.getIfFindIrrWord(word);

    return response;
  }

  async getIfFindIrrWord(word: string) {
    const result = await this.prisma
      .irrverb.findMany({
        where: {
          OR: [
            {
              form1EN: word
            },
            {
              form2EN: word
            },
            {
              form3EN: word
            },
          ]
        }
      });

    if (result !== null) {
      return result[0]
    }
    return null;
  }
  async getEntitiesByWord(word: string, ctx: Context) {
    try {
      const result = await this.prisma.word.findOne({
        where: {
          AnotherUser_firstname_lastname_key: {
            userId: ctx.userId,
            en: word
          }
        },
        include: {
          entities: {
            include: {
              irrverb: true,
              phrases: true,
              sentences: true,
              words: true,
            }
          }
        }
      });

      if(result === null) return [];

      return result.entities;
    }
    catch (e) {
      console.log(e)
      return [];
    }
  };

  async createFullEntity(data: TranslateWordWithParseInput, ctx: Context) {
    let irrvervb: any = {};
    if (data.irrverbId) {
      irrvervb = {
        irrverb: {
          connect: {
            id: data.irrverbId
          }
        }
      }
    }

    const idEntity = await this.prisma.entity.create({
      data: {
        ...irrvervb,
        title: data.title,
        User: {
          connect: {
            id: ctx.userId
          },
        }
      },
      select: {
        id: true,
      }
    });

    for (const other of data.words) {
      const id = (await this.createOneWord(idEntity.id, other.type, other.en, ctx.userId)).id;
      for (const translate of other.translate) {
        await this.createOrUpdateTranslate(id, translate);
      }
    }

    for(const phrase of data.phrases) {
      await this.createOnePhrase(idEntity.id, phrase.phrase, phrase.ru)
    }
    for(const sentence of data.sentences) {
      await this.createOneSentence(idEntity.id, sentence.sentence, sentence.ru)
    }
    return idEntity.id;
  }
  async createOrUpdateTranslate(idWord: number, translation: TranslationInput) {
    return this.prisma.translate.upsert({
      where: {
        ru: translation.ru
      },
      update: {
        words: {
          connect: {
            id: idWord
          }
        }
      },
      create: {
        type: translation.type,
        words: {
          connect: {
            id: idWord
          }
        },
        ru: translation.ru
      },
      select: {
        id: true,
        ru: true,
        type: true,
      }
    })
  }
  async createOnePhrase(entityId: number, en: string, ru: string) {
    return this.prisma.phrase.upsert({
      where: {
        phrase: en
      },
      create: {
        entities: {
          connect: {
            id: entityId
          }
        },
        phrase: en,
        ru: ru
      },
      update: {
        entities: {
          connect: {
            id: entityId
          }
        }
      }
    })
  }
  async createOneSentence(entityId: number, en: string, ru: string) {
    return this.prisma.sentence.upsert({
      where: {
        sentence: en
      },
      create: {
        entities: {
          connect: {
            id: entityId
          }
        },
        sentence: en,
        ru: ru
      },
      update: {
        entities: {
          connect: {
            id: entityId
          }
        }
      }
    })
  }
  async createOneWord(entityId: number, tag: PartOfSpeech, en: string, userId: number) {
    return this.prisma.word.upsert({
      where: {
        AnotherUser_firstname_lastname_key: {
          en: en,
          userId
        }
      },
      create: {
        type: tag,
        en,
        User: {
          connect: {
            id: userId
          }
        },
        entities: {
          connect: {
            id: entityId,
          }
        }
      },
      update: {
        entities: {
          connect: {
            id: entityId,
          }
        }
      },
      select: {
        id: true
      }
    });
  }
}
