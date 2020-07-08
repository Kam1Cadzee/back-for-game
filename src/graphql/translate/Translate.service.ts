import { Inject, Service } from 'typedi';
import serviceABBYY from '../../service/abbyyService';
import azureService from '../../service/azureService';
import { ApolloError } from 'apollo-server-errors';
import ConvertResponse, {
  INormalizeWordList,
} from '../../utils/convertResponse';
import {
  OtherWord,
  TranslateWordWithParseInput,
  TranslateWordWithParseReturn,
  TranslationInput,
  UpdatePhrasesInput,
  UpdateSentencesInput,
} from './Translate.types';
import uniqby from 'lodash.uniqby';
import detectPartOfSpeech from '../../utils/partOfSpeech';
import { IAnotherWordList } from '../../typing/ABBYYTypes';
import { PrismaClient } from '@prisma/client';
import { Context } from '../../context';
import { PartOfSpeech } from '../../type-graphql/enums';
import { Entity } from '../../type-graphql/models';
import config from '../../config';
import { throwErrorIfTestUser } from '../../utils/testRoleError';

const includeEntity = {
  disconnectWords: {
    select: {
      id: true,
    },
  },
  words: {
    include: {
      translate: true,
      disconnectTranslate: true,
    },
  },
  disconnectPhrases: {
    select: {
      id: true,
    },
  },
  disconnectSentences: {
    select: {
      id: true,
    },
  },
  sentences: true,
  phrases: true,
  irrverb: true,
};

@Service()
export class TranslateService {
  constructor(
    @Inject('PRISMA_CONTEXT') private readonly prisma: PrismaClient,
  ) {}

  async translateText(text: string, role: any) {
    throwErrorIfTestUser(role, 'Sorry, No available for test user');
    const result = await azureService.translate(text);
    if (result === null) {
      throw new ApolloError('No translate', '404');
    }
    return result;
  }

  async translatePhrase(phrase: string, entity: string, ctx: Context) {
    const res = await this.prisma.phrase.findOne({
      where: {
        phrase,
      },
      select: {
        ru: true,
      },
    });
    if (res) {
      return {
        ru: res.ru,
        phrase,
      };
    }
    const result = await this.translateText(phrase, ctx.role);
    this.createPhraseForSuperUser(result, phrase, entity);
    return {
      ru: result,
      phrase,
    };
  }

  async translateSentence(sentence: string, entity: string, ctx: Context) {
    const res = await this.prisma.sentence.findOne({
      where: {
        sentence,
      },
      select: {
        ru: true,
      },
    });
    if (res) {
      return {
        ru: res.ru,
        sentence,
      };
    }
    const result = await this.translateText(sentence, ctx.role);
    this.createSentenceForSuperUser(result, sentence, entity);
    return {
      ru: result,
      sentence,
    };
  }

  async translateWord(
    word: string,
    entity: string,
    currentUserId: number,
    ctx: Context,
  ) {
    const res = await this.prisma.word.findOne({
      where: {
        AnotherUser_firstname_lastname_key: {
          en: word.toLowerCase(),
          userId: config.superUser,
        },
      },
      select: {
        type: true,
        translate: {
          select: {
            ru: true,
            type: true,
          },
        },
      },
    });
    if (res) {
      return res;
    }
    throwErrorIfTestUser(ctx.role, 'Sorry,No available for test user');
    let count = 0;
    let result = await serviceABBYY.miniCard(word);
    count += 1;
    if (result === null) {
      result = await azureService.translate(word);
      count += 1;
      if (result === null) {
        this.incrementCountUser(currentUserId, count);
        throw new ApolloError('No translate', '404');
      }
    }
    this.incrementCountUser(currentUserId, count);
    const type = await detectPartOfSpeech.getPartOfSpeech(word);
    const translate = ConvertResponse.getArray(result).map((ru) => ({
      ru: ru,
      type: type,
    }));

    return {
      type,
      translate,
    };
  }

  async createSentenceForSuperUser(
    ru: string,
    sentence: string,
    entity: string,
  ) {
    await this.prisma.entity.update({
      where: {
        unique_title_userId: {
          userId: config.superUser,
          title: entity,
        },
      },
      data: {
        sentences: {
          create: {
            ru,
            sentence,
          },
        },
      },
    });
  }

  async createPhraseForSuperUser(ru: string, phrase: string, entity: string) {
    await this.prisma.entity.update({
      where: {
        unique_title_userId: {
          userId: config.superUser,
          title: entity,
        },
      },
      data: {
        phrases: {
          create: {
            ru,
            phrase,
          },
        },
      },
    });
  }

  async createWordForSuperUser(data: OtherWord, entity: string) {
    const connectTranslate = await Promise.all(
      data.translate.map((t) =>
        this.prisma.translate.upsert({
          where: {
            ru: t.ru,
          },
          create: {
            ru: t.ru,
            type: t.type,
          },
          update: {},
          select: {
            id: true,
          },
        }),
      ),
    );
    await this.prisma.entity.update({
      where: {
        unique_title_userId: {
          title: entity,
          userId: config.superUser,
        },
      },
      data: {
        words: {
          create: {
            translate: {
              connect: connectTranslate.map((t) => ({ id: t.id })),
            },
            en: data.en,
            type: data.type,
            User: {
              connect: {
                id: config.superUser,
              },
            },
          },
        },
      },
    });
  }

  async translateWordWithParse(word: string, userId: number) {
    let count = 0;
    const response: TranslateWordWithParseReturn = {
      words: [],
      irrverb: null,
      backTranslations: [],
      title: word,
      phrases: [],
      sentences: [],
      disconnectWords: [],
    };
    let firstWord: OtherWord = {
      en: word,
      type: await detectPartOfSpeech.getPartOfSpeech(word),
      translate: [],
      disconnectTranslate: [],
    };

    const dictionary = await azureService.dictionary(word);
    count += 1;
    if (dictionary) {
      const convert = ConvertResponse.convertDictionary(dictionary);
      response.backTranslations = convert.backTranslations;
      firstWord.translate.push(...convert.translations);
    }

    let wordList: IAnotherWordList[] | any = await serviceABBYY.wordList(word);
    count += 1;
    let convertWordList: INormalizeWordList | null = null;
    if (wordList) {
      convertWordList = ConvertResponse.convertWordList(wordList);
    } else {
      wordList = await serviceABBYY.anotherWordList(word);
      if (wordList) {
        convertWordList = ConvertResponse.anotherConvertWordList(
          wordList,
          word,
        );
      }
    }
    if (convertWordList) {
      response.phrases = convertWordList.phrases;
      response.words = convertWordList.words;
    }

    const miniCard = await serviceABBYY.miniCard(word);
    count += 1;
    if (miniCard) {
      miniCard.split(',').forEach((mini) => {
        firstWord.translate.push({
          type: firstWord.type,
          ru: mini.trim(),
        });
      });
    }

    const azureTranslate = await azureService.translate(word);
    count += 1;
    if (azureTranslate) {
      firstWord.translate.push({
        type: firstWord.type,
        ru: azureTranslate,
      });
    }

    firstWord.translate.forEach((t) => (t.ru = t.ru.toLowerCase()));
    firstWord.translate = uniqby(firstWord.translate, 'ru');
    response.words.unshift(firstWord);
    response.backTranslations = ConvertResponse.removeDuplicate(
      response.backTranslations,
      word,
    );
    response.irrverb = await this.getIfFindIrrWord(word);

    this.incrementCountUser(userId, count);
    return response;
  }

  async incrementCountUser(userId: number, count: number) {
    const user = await this.prisma.user.findOne({
      where: {
        id: userId,
      },
    });
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        countQuery: user.countQuery + count,
      },
    });
  }

  async getIfFindIrrWord(word: string) {
    const result = await this.prisma.irrverb.findMany({
      where: {
        OR: [
          {
            form1EN: word,
          },
          {
            form2EN: word,
          },
          {
            form3EN: word,
          },
        ],
      },
    });

    if (result !== null) {
      return result[0];
    }
    return null;
  }

  async getEntitiesByWord(word: string, ctx: Context) {
    let result = await this.getEntityByUserId(word, ctx.userId);
    console.log(result);
    let entities: any[] = [];

    if (result === null) {
      entities = await this.createEntityWithSuperUser(word, ctx.userId);
      console.log(entities);
      if (entities === null) {
        console.log('before');
        throwErrorIfTestUser(ctx.role, 'Sorry, No access for create new words');
        console.log('after');

        const data = await this.translateWordWithParse(word, ctx.userId);

        const entity: any = await this.createEntityWithAnyData(
          data,
          ctx.userId,
        );
        this.utilCreateEntity(entity, config.superUser, false);
        return [entity];
      } else {
        return entities;
      }
    }

    return result.entities;
  }

  async utilCreateEntity(
    entity: Entity,
    toUserId: number,
    isNeededEdit: boolean = false,
  ) {
    const words = await Promise.all(
      entity.words.map(
        async (w) =>
          await this.createOrUpdateWord(
            w.type,
            w.en,
            toUserId,
            undefined,
            w.translate.map((t) => ({ id: t.id })),
          ),
      ),
    );

    const connectIrr = entity.irrverbId
      ? {
          irrverb: {
            connect: {
              id: entity.irrverbId,
            },
          },
        }
      : {};
    try {
      return this.prisma.entity.create({
        data: {
          title: entity.title,
          User: {
            connect: {
              id: toUserId,
            },
          },
          isNeededEdit,
          sentences: {
            connect: entity.sentences.map((s) => ({ id: s.id })),
          },
          phrases: {
            connect: entity.phrases.map((p) => ({ id: p.id })),
          },
          words: {
            connect: words.map((w) => ({ id: w.id })),
          },
          ...connectIrr,
        },
        include: includeEntity,
      });
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async createEntityWithSuperUser(
    word: string,
    userId: number,
    isNeededEdit: boolean = false,
  ) {
    const result = await this.getEntityByUserId(word, config.superUser); //todo
    if (result === null) return null;

    const entities: any = await Promise.all(
      result.entities.map(async (entity: any) => {
        return this.utilCreateEntity(entity, userId, isNeededEdit);
      }),
    );
    return entities;
  }

  async createEntityWithAnyData(
    data: TranslateWordWithParseReturn,
    userId: number,
  ) {
    let irrvervb: any = {};
    if (data.irrverb) {
      irrvervb = {
        irrverb: {
          connect: {
            id: data.irrverb.id,
          },
        },
      };
    }

    const idEntity = await this.prisma.entity.create({
      data: {
        ...irrvervb,
        title: data.title,
        User: {
          connect: {
            id: userId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    for (const other of data.words) {
      const id = (
        await this.createOrUpdateWord(other.type, other.en, userId, idEntity.id)
      ).id;
      for (const translate of other.translate) {
        await this.createOrUpdateTranslate(id, translate);
      }
    }

    for (const phrase of data.phrases) {
      await this.createOnePhrase(idEntity.id, phrase.phrase, phrase.ru);
    }
    for (const sentence of data.sentences) {
      await this.createOneSentence(idEntity.id, sentence.sentence, sentence.ru);
    }
    return this.prisma.entity.findOne({
      where: {
        id: idEntity.id,
      },
      include: includeEntity,
    });
  }

  async getEntityByUserId(word: string, userId: number) {
    const result = await this.prisma.word.findOne({
      where: {
        AnotherUser_firstname_lastname_key: {
          userId: userId,
          en: word,
        },
      },
      include: {
        entities: {
          include: includeEntity,
        },
      },
    });
    return result;
  }

  async updatePhraseByEntity(data: UpdatePhrasesInput) {
    const connect: { id: number }[] = [];
    for (const phrase of data.phrases) {
      const res = await this.prisma.phrase.upsert({
        where: {
          phrase: phrase.phrase,
        },
        create: {
          phrase: phrase.phrase,
          ru: phrase.ru,
        },
        update: {
          ru: phrase.ru,
        },
      });
      if (phrase.id !== res.id) {
        data.disconnectPhrases.push(phrase.id);
        connect.push({ id: res.id });
      }
    }
    await this.prisma.entity.update({
      where: {
        id: data.entityId,
      },
      data: {
        disconnectPhrases: {
          set: data.disconnectPhrases.map((d) => ({ id: d })),
        },
        phrases: {
          connect,
        },
        updatedAt: new Date(),
        isCreate: true,
      },
    });
    return true;
  }

  async updateSentencesByEntity(data: UpdateSentencesInput) {
    const connect: { id: number }[] = [];
    for (const sentence of data.sentences) {
      const res = await this.prisma.sentence.upsert({
        where: {
          sentence: sentence.sentence,
        },
        create: {
          sentence: sentence.sentence,
          ru: sentence.ru,
        },
        update: {
          ru: sentence.ru,
        },
      });
      if (sentence.id !== res.id) {
        data.disconnectSentences.push(sentence.id);
        connect.push({ id: res.id });
      }
    }
    await this.prisma.entity.update({
      where: {
        id: data.entityId,
      },
      data: {
        disconnectSentences: {
          set: data.disconnectSentences.map((d) => ({ id: d })),
        },
        sentences: {
          connect,
        },
        updatedAt: new Date(),
        isCreate: true,
      },
    });
    return true;
  }

  async updateWordsByEntity(data: TranslateWordWithParseInput) {
    await this.prisma.entity.update({
      where: {
        id: data.entityId,
      },
      data: {
        disconnectWords: {
          set: data.disconnectWords.map((d) => ({ id: d })),
        },
        updatedAt: new Date(),
        isCreate: true,
      },
    });
    for (const w of data.words) {
      const connect = [];
      for (const t of w.translate) {
        const idTranslate = await this.prisma.translate.upsert({
          where: {
            ru: t.ru,
          },
          create: {
            ru: t.ru,
            type: t.type,
          },
          update: {
            type: t.type,
            updatedAt: new Date(),
          },
          select: {
            id: true,
          },
        });
        if (t.id !== idTranslate.id) {
          w.disconnectTranslate.push(t.id);
          connect.push({ id: idTranslate.id });
        }
      }

      await this.prisma.word.update({
        where: {
          id: w.id,
        },
        data: {
          type: w.type,
          updatedAt: new Date(),
          disconnectTranslate: {
            set: w.disconnectTranslate.map((d) => ({ id: d })),
          },
          translate: {
            connect,
          },
        },
      });
    }
    return true;
  }

  async createOrUpdateTranslate(
    idWord: number,
    translation: Partial<TranslationInput>,
  ) {
    return this.prisma.translate.upsert({
      where: {
        ru: translation.ru,
      },
      update: {
        words: {
          connect: {
            id: idWord,
          },
        },
      },
      create: {
        type: translation.type,
        words: {
          connect: {
            id: idWord,
          },
        },
        ru: translation.ru,
      },
      select: {
        id: true,
        ru: true,
        type: true,
      },
    });
  }

  async createOnePhrase(entityId: number, en: string, ru: string) {
    return this.prisma.phrase.upsert({
      where: {
        phrase: en,
      },
      create: {
        entities: {
          connect: {
            id: entityId,
          },
        },
        phrase: en,
        ru: ru,
      },
      update: {
        entities: {
          connect: {
            id: entityId,
          },
        },
      },
    });
  }

  async createOneSentence(entityId: number, en: string, ru: string) {
    return this.prisma.sentence.upsert({
      where: {
        sentence: en,
      },
      create: {
        entities: {
          connect: {
            id: entityId,
          },
        },
        sentence: en,
        ru: ru,
      },
      update: {
        entities: {
          connect: {
            id: entityId,
          },
        },
      },
    });
  }

  async createOrUpdateWord(
    tag: PartOfSpeech | any,
    en: string,
    userId: number,
    entityId?: number,
    translate: { id: number }[] = [],
  ) {
    const obj =
      entityId !== undefined
        ? {
            entities: {
              connect: {
                id: entityId,
              },
            },
          }
        : {};
    return this.prisma.word.upsert({
      where: {
        AnotherUser_firstname_lastname_key: {
          en: en,
          userId,
        },
      },
      create: {
        type: tag,
        en,
        User: {
          connect: {
            id: userId,
          },
        },
        translate: {
          connect: translate,
        },
        ...obj,
      },
      update: {
        ...obj,
        updatedAt: new Date(),
      },
    });
  }

  async createOrUpdateWordWithTranslate(
    entityId: number,
    tag: PartOfSpeech,
    en: string,
    userId: number,
    translate: string[],
  ) {
    const word = await this.createOrUpdateWord(tag, en, userId, entityId);
    for (let t of translate) {
      await this.createOrUpdateTranslate(word.id, { ru: t, type: tag });
    }

    return this.prisma.word.findOne({
      where: {
        id: word.id,
      },
      select: {
        en: true,
        id: true,
        type: true,
        disconnectTranslate: {
          select: {
            id: true,
          },
        },
        translate: {
          select: {
            id: true,
            ru: true,
            type: true,
          },
        },
      },
    });
  }

  async getCountEntities(userId: number) {
    const res = await this.prisma.user.findOne({
      where: {
        id: userId,
      },
      select: {
        entities: {
          select: {
            id: true,
          },
        },
      },
    });
    if (res) {
      return res.entities.length;
    }
    return 0;
  }
}
