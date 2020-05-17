import {PartOfSpeech} from '../type-graphql/enums';

export interface AZUREError {
  'error':
    { 'code': number,
      'message': string,
    }
}
export interface IResponseTranslate {
  "translations": [
    {
      "text": string,
      "to": string,
    }
  ]
}

export interface IBackTranslationsItem {
  "normalizedText": string,
  "displayText": string,
  "numExamples":  number,
  "frequencyCount": number
}
export interface ITranslationsItem  {
  "normalizedTarget": string,
  "displayTarget": string,
  "posTag": PartOfSpeech,
  "confidence": number,
  "prefixWord": string,
  "backTranslations": IBackTranslationsItem[]
}
export interface IResponseDictionary {
  "normalizedSource": string,
  "displaySource": string,
  "translations": ITranslationsItem[],
}
