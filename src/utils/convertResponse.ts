import {IResponseDictionary} from '../typing/AZURETypes';
import config from '../config';
import {IWordList} from '../typing/ABBYYTypes';
import {PartOfSpeech} from '../type-graphql/enums';

interface INormalizeDictionary {
  normalizedSource: string;
  translations: {
    normalizedTarget: string;
    posTag: PartOfSpeech;
    confidence: number;
    backTranslations: string[];
  }[]
}

interface INormalizeWordList {
  translation?: string;
  expressions: {
    word: string;
    translation: string;
  }[]
}
export const convertDictionary = (data: IResponseDictionary) => {
    const res: INormalizeDictionary = {
      normalizedSource: data.normalizedSource,
      translations: data.translations.filter(t => t.confidence >= config.confidence)
        .map(t => {
          return {
            confidence: t.confidence,
            posTag: t.posTag,
            normalizedTarget: t.normalizedTarget,
            backTranslations: t.backTranslations.map(b => b.normalizedText)
          }
        })
    };
    return res;
};

export const convertWordList = (data: IWordList) => {
  const findItem = data.Headings.find(d => d.OriginalWord === '');
  const result: INormalizeWordList = {
    expressions: data.Headings.filter(d => d.OriginalWord !== '').map(d => ({
      word: d.Heading,
      translation: d.Translation,
    }))
  };
  if(findItem) {
    result.translation = findItem.Translation;
  }

  return result;
};
