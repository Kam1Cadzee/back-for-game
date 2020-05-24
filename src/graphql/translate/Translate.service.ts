import {Inject, Service} from 'typedi';
import {Context} from '../../context';
import serviceABBYY from '../../service/abbyyService';
import azureService from '../../service/azureService';
import {ApolloError} from 'apollo-server-errors';
import ConvertResponse from '../../utils/convertResponse';
import {PartOfSpeech} from '../../type-graphql/enums';
import {TranslateWordWithParseReturn} from './Translate.types';
import uniqby from 'lodash.uniqby';
import detectPartOfSpeech from '../../utils/partOfSpeech';

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
      otherWords: [],
      tag: PartOfSpeech.OTHER,
      translations: [],
      irrword: null,
      backTranslations: [],
      original: word,
      phrases: [],
      sentences: []
    };
    response.tag = await detectPartOfSpeech.getPartOfSpeech(word);

    const dictionary = await azureService.dictionary(word);
    if (dictionary !== null) {
      const convert = ConvertResponse.convertDictionary(dictionary);
      response.backTranslations = convert.backTranslations;
      response.translations.push(...convert.translations);
    }

    const wordList = await serviceABBYY.wordList(word);
    if (wordList !== null && wordList !== 429) {
      const convert = ConvertResponse.convertWordList(wordList);
      if (convert.translation) {
        response.translations.push(convert.translation)
      }
      response.phrases = convert.phrases;
      response.otherWords = convert.otherWords;
    }

    const miniCard = await serviceABBYY.miniCard(word);
    if (miniCard !== null && miniCard !== 429) {
      response.translations.push({
        tag: PartOfSpeech.OTHER,
        translation: miniCard
      });
    }

    const azureTranslate = await azureService.translate(word);
    if (azureTranslate !== null) {
      response.translations.push({
        tag: PartOfSpeech.OTHER,
        translation: azureTranslate
      });
    }

    response.translations.forEach(t => t.translation = t.translation.toLowerCase());
    response.translations = uniqby(response.translations, 'translation');
    response.backTranslations = ConvertResponse.removeDuplicate(response.backTranslations, word);
    response.irrword = await this.getIfFindIrrWord(word);

    return response;
  }

  async getIfFindIrrWord(word: string) {
    const result = await this.context.prisma
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

    if(result !== null) {
      return result[0]
    }
    return null;
  }
}
