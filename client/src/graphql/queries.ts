import {gql} from 'apollo-boost';
import FRAGMENTS from './fragments';

const QUERIES = {
  LOGIN: gql`
    mutation login($loginData: LoginUserInput!) {
      login(data: $loginData) {
        user {
          ${FRAGMENTS.user}
        }
        token
      }
    }
  `,
  SIGNUP: gql`
    mutation signUp($data: UserSignUpInput!) {
      signup(data: $data) {
        user {
          ${FRAGMENTS.user}
        }
        token
      }
    }
  `,
  CURRENT_USER: gql`
    {
      currentUser @client {
        ${FRAGMENTS.user}
      }
    }
  `,
  REFRESH_USER: gql`
    mutation {
      refreshUser {
        ${FRAGMENTS.user}
      }
    }
  `,
  IS_AUTH: gql`
    {
      isAuth @client
    }
  `,
  USERS: gql`
    query users {
      users {
        ${FRAGMENTS.user}
      }
    }
  `,
  COUNT_ENTITY: gql`
    query countEntity {
      aggregateEntity{
        count
      }
    }
  `,
  COUNT_WORDS: gql`
    query countWords {
      aggregateWord{
        count
      }
    }
  `,
  COUNT_TRANSLATE: gql`
    query countTranslate {
      aggregateTranslate{
        count
      }
    }
  `,
  GET_ENTITIES: gql`
  query getEntities($id: Int) {
    entities(where: {userId: {equals: $id}}) {
     ${FRAGMENTS.entity}
    }
}
  `,
  GET_ENTITIES_BY_WORD: gql`
   query getEntitiesByWord($word: String!) {
    getEntitiesByWord(word: $word) {
        ${FRAGMENTS.entity}
    }
}
  `,
  TRANSLATE_WORD_WITH_PARSE: gql`
    query translateWordWithParse($word: String!) {
        translateWordWithParse(word: $word) {
          title,
          words {
            type,
            en,
             translate {
              type,
              ru
            }
          },
          phrases{
           phrase,
            ru
          },
          backTranslations,
          irrverb {
            form1EN,
            form2EN,
            form3EN,
            id,
            ru
          },
          sentences {
            sentence,
            ru
          }
      }
  }
  `,
  GET_PART_OF_SPEECH: gql`
    query PartOfSpeech {
      partOfSpeechDescs {
        id,
        type,
        ru,
        ua,
        en
      }
    }
  `
};

export default QUERIES;
