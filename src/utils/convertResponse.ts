import {IResponseDictionary} from '../typing/AZURETypes';
import {IWordList} from '../typing/ABBYYTypes';
import {PartOfSpeech} from '../type-graphql/enums';
import detectPartOfSpeech from './partOfSpeech';

interface INormalizeDictionary {
  translations: {
    tag: PartOfSpeech,
    translation: string
  }[];
  backTranslations: string[];
}

interface INormalizeWordList {
  translation: {
    tag: PartOfSpeech,
    translation: string,
  } | null,
  otherWords: {
    tag: PartOfSpeech,
    en: string,
    ru: {
      tag: PartOfSpeech,
      translation: string
    }[],
  }[];
  phrases: {
    word: string;
    translation: string;
  }[]
}

class ConvertResponse {
  static convertDictionary = (data: IResponseDictionary) => {
    const result: INormalizeDictionary = {
      translations: [],
      backTranslations: []
    };

    data.translations.forEach(t => {
      result.translations.push({
        tag: t.posTag,
        translation: t.normalizedTarget
      });
      result.backTranslations.push(...t.backTranslations.map(b => b.normalizedText))
    });
    return result;
  };

  static convertWordList = (data: IWordList) => {
    const findItem = data.Headings.find(d => d.OriginalWord === '');
    const result: INormalizeWordList = {
      phrases: [],
      otherWords: [],
      translation: null
    };
    const expressions = data.Headings.filter(d => d.OriginalWord !== '').map(d => ({
      word: d.Heading,
      translation: d.Translation,
    }));
    expressions.forEach(async exp => {
      if(exp.word.indexOf(' ') === -1) {
        result.otherWords.push({
          tag: await detectPartOfSpeech.getPartOfSpeech(exp.word),
          ru: ConvertResponse.getArray(exp.translation).map(t => ({translation: t, tag: PartOfSpeech.OTHER})),
          en: exp.word
        })
      }
      else {
        result.phrases.push({
          translation: exp.translation,
          word: exp.word
        })
      }
    });

    if (findItem) {
      result.translation = {
        tag: PartOfSpeech.OTHER,
        translation: findItem.Translation,
      }
    }

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
