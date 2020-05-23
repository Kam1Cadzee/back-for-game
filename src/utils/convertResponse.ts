import {IResponseDictionary} from '../typing/AZURETypes';
import {IWordList} from '../typing/ABBYYTypes';
import {PartOfSpeech} from '../type-graphql/enums';

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
    ru: string,
  }[];
  phrases: {
    word: string;
    translation: string;
  }[]
}

export const convertDictionary = (data: IResponseDictionary) => {
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

export const convertWordList = (data: IWordList) => {
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
  expressions.forEach(exp => {
    if(exp.word.indexOf(' ') === -1) {
      result.otherWords.push({
        tag: PartOfSpeech.OTHER,
        ru: exp.translation,
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
