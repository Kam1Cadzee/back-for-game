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
              id
          }
      }
  `
};
