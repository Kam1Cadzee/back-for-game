import {gql} from 'apollo-boost';

export const MUTATION = {
  deleteWord: gql`
      mutation deleteWord($idEntity: Int!, $idWord: Int!) {
          updateWord(data: {
              disconnectEntities: {
                  connect: {
                      id: $idEntity
                  }
              }
          }, where: {id: $idWord}) {
              id
          }
      }
  `,
  deleteTranslate: gql`
      mutation deleteTranslate($idTransalte: Int!, $idWord: Int!) {
          updateWord(data: {
              disconnectTranslate: {
                  connect: {
                      id: $idTransalte
                  }
              }
          }, where: {
              id: $idWord
          }) {
              id,
              disconnectTranslate {
                  id
              }
          }
      }
  `,
  createOrUpdateWordWithTranslate: gql`
      mutation createOrUpdateWordWithTranslate($entityId: Float!,$type: PartOfSpeech!, $en: String!, $translate: [String!]!) {
          createOrUpdateWordWithTranslate(entityId: $entityId, type: $type, en: $en, translate: $translate) {
              id,
              en,
              type,
              disconnectTranslate {
                  id
              },
              translate {
                  id,
                  ru,
                  type
              }
          }
      }
  `,
  updateWordsByEntity: gql`
      mutation updateWordsByEntity($data: TranslateWordWithParseInput!) {
          updateWordsByEntity(data: $data)
      }
  `,
  upsertTranslate: gql`
      mutation upsertTranslate($idWord: Int!, $ru: String!) {
          upsertTranslate(where: {
              ru: $ru
          }, create: {
              ru: $ru,
              type: OTHER,
              words: {
                  connect: {
                      id: $idWord
                  }
              }
          },
              update: {
                  words: {
                      connect: {
                          id: $idWord
                      }
                  }
              }) {
              id,
              ru,
              type,
          }
      }
  `,
  translatePhrase: gql`
      mutation translatePhrase($phrase: String!) {
          translatePhrase(phrase: $phrase) {
              phrase,
              ru
          }
      }
  `,
  upsertPhrase: gql`
      mutation upsertPhrase($phrase: String!, $ru: String!, $entityId: Int!) {
          upsertPhrase(where: {
              phrase: $phrase
          }, create: {
              phrase: $phrase,
              ru: $ru,
              entities: {
                  connect: {
                      id: $entityId
                  }
              }
          }, update: {
              entities: {
                  connect: {
                      id: $entityId
                  }
              }
          }) {
              id,
              phrase,
              ru
          }
      }
  `,
  updatePhraseByEntity: gql`
      mutation updatePhraseByEntity($data: UpdatePhrasesInput!) {
          updatePhraseByEntity(data: $data)
      }
  `
};
