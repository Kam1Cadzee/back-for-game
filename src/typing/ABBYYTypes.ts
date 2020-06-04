export interface IMinicard {
  "SourceLanguage": number,
  "TargetLanguage": number,
  "Heading": string,
  "Translation": {
    "Heading": string,
    "Translation": string,
    "DictionaryName": string,
    "SoundName": string,
    "Type": number,
    "OriginalWord": string,
  },
  "SeeAlso": []
}

export interface IWordList {
  "SourceLanguage": number,
  "TargetLanguage": number,
  "InvertedDirection": boolean,
  "Prefix": string,
  "HasNextPage": boolean,
  "StartPos": string,
  "Headings": {
    "Heading": string,
    "Translation": string,
    "DictionaryName": string,
    "SoundName": string,
    "Type": number,
    "OriginalWord": string,
  }[],
}

export interface IAnotherWordList {
  "heading": string,
  "lingvoTranslations": string,
}
