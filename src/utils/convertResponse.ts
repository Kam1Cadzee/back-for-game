import {IResponseDictionary} from '../typing/AZURETypes';
import {IAnotherWordList, IWordList} from '../typing/ABBYYTypes';
import {PartOfSpeech} from '../type-graphql/enums';
import detectPartOfSpeech from './partOfSpeech';
import {OtherWord, PhraseCustom, Translation} from '../graphql/translate/Translate.types';

export interface INormalizeDictionary {
  translations: Translation[];
  backTranslations: string[];
}

export interface INormalizeWordList {
  words: OtherWord[];
  phrases: PhraseCustom[]
}

class ConvertResponse {
  static convertDictionary = (data: IResponseDictionary) => {
    const result: INormalizeDictionary = {
      translations: [],
      backTranslations: []
    };

    data.translations.forEach(t => {
      result.translations.push({
        type: t.posTag,
        ru: t.normalizedTarget
      });
      result.backTranslations.push(...t.backTranslations.map(b => b.normalizedText))
    });
    return result;
  };

  static convertWordList = (data: IWordList) => {
    const result: INormalizeWordList = {
      phrases: [],
      words: []
    };
    const expressions = data.Headings.filter(d => d.OriginalWord !== '').map(d => ({
      word: d.Heading,
      translation: d.Translation,
    }));
    expressions.forEach(async exp => {
      if(exp.word.indexOf(' ') === -1) {
        const type = await detectPartOfSpeech.getPartOfSpeech(exp.word);
        result.words.push({
          type,
          translate: ConvertResponse.getArray(exp.translation).map(t => ({ru: t, type})),
          en: exp.word
        })
      }
      else {
        result.phrases.push({
          ru: exp.translation,
          phrase: exp.word
        })
      }
    });

    return result;
  };


  static anotherConvertWordList = (data: IAnotherWordList[], originalWord: string) => {
    const result: INormalizeWordList = {
      phrases: [],
      words: []
    };
    const expressions = data.filter(d => d.heading !== originalWord);

    expressions.forEach(async exp => {
      if(exp.heading.indexOf(' ') === -1) {
        const type = await detectPartOfSpeech.getPartOfSpeech(exp.heading);
        result.words.push({
          type,
          translate: ConvertResponse.getArray(exp.lingvoTranslations).map(t => ({ru: t, type})),
          en: exp.heading
        })
      }
      else {
        result.phrases.push({
          ru: exp.lingvoTranslations,
          phrase: exp.heading
        })
      }
    });

    return result;
  };

  static changeSeparationSymbol = (str: string) => {
    return str.replace(/;/g, ',')
      .replace(/,\s/g, ',');
  };
  static joinWords = (arr: string[]) => {
    return arr.join(',').toLowerCase();
  };
  static splitString = (str: string) => {
    return str.split(',');
  };

  static getArray = (str: string) => {
    return ConvertResponse.splitString(ConvertResponse.changeSeparationSymbol(str));
  };

  static removeDuplicate = (arr: string[], word: string) => {
    const join = ConvertResponse.joinWords(arr);
    const split = ConvertResponse.splitString(ConvertResponse.changeSeparationSymbol(join));
    return [...new Set(split)].filter(w => w !== word);
  };
}

export default ConvertResponse;
