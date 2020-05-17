import {Inject, Service} from 'typedi';
import {Context} from '../../context';
import serviceABBYY from '../../service/abbyyService';
import azureService from '../../service/azureService';
import {ApolloError} from 'apollo-server-errors';
import {convertDictionary, convertWordList} from '../../utils/convertResponse';
import {PartOfSpeech} from '../../type-graphql/enums';
import {TranslateWordWithParseReturn} from './Translate.types';

@Service()
export class TranslateService {
  constructor(@Inject('PRISMA_CONTEXT') private readonly context: Context) {

  }

  async translateWord(word: string) {
    let result = await serviceABBYY.miniCard(word);
    if (result === null) {
      result = await azureService.translate(word);
      if (result === null) {
        throw new ApolloError("No translate", "404")
      }
    } else if (result === 429) {
      throw new ApolloError("ABBYY service expired token", "429")
    }

    return result;
  }

  async translateWordWithParse(word: string) {
    const response: TranslateWordWithParseReturn = {
      expressions: [],
      otherWords: [],
      tag: PartOfSpeech.OTHER,
      translations: [],
      irrword: null
    };
    const translations: string[] = [];

    const miniCard = await serviceABBYY.miniCard(word);
    if (miniCard !== null && miniCard !== 429) {
      translations.push(miniCard);
    }

    const azureTranslate = await azureService.translate(word);
    if (azureTranslate !== null) {
      translations.push(azureTranslate);
    }

    const dictionary = await azureService.dictionary(word);
    if (dictionary !== null) {
      const convert = convertDictionary(dictionary);
      response.tag = convert.translations[0].posTag;
      response.otherWords = convert.translations;
    }

    const wordList = await serviceABBYY.wordList(word);
    if (wordList !== null && wordList !== 429) {
      const convert = convertWordList(wordList);
      if (convert.translation) {
        translations.push(convert.translation)
      }
      response.expressions = convert.expressions;
    }
    response.translations = removeDuplicate(translations);
    response.irrword = await this.getIfFindIrrWord(word);
    return response;
  }

  async getIfFindIrrWord(word: string) {
    const result = await this.context.prisma
      .irrverb.findMany({
        where: {
          OR: {
            form1EN: word,

          }
        }
      });

    if(result !== null) {
      return result[0]
    }
    return null;
  }
}

const removeDuplicate = (arr: string[]) => {
  const join = arr.join(',').toLowerCase();
  const split = join.replace(/;/g, ',')
    .replace(/\s/g, '')
    .split(',');
  return [...new Set(split)];
};
