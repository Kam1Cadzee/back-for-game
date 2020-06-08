import { gql } from 'apollo-boost';

const FRAGMENTS = {
  user: `
      name
      lastName
      email
      id
      role
  `,
  entity: `
   id,
    title,
    irrverb {
      form1EN,
      form2EN,
      form3EN,
      ru
    },
    isNeededEdit,
    words {
      id,
      en,
      type,
      disconnectTranslate {
        id
      }
      translate {
        ru,
        id,
        type
      },
    },
    phrases {
      id,
      phrase,
      ru
    },
    sentences {
      id, 
      sentence,
      ru
    },
    disconnectWords {
      id
    }
  `
};

export default FRAGMENTS;
