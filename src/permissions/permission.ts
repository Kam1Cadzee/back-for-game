import {allow, rule, shield} from 'graphql-shield';
import {Context} from '../context';
import {Role} from '../type-graphql/enums';

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const { userId }: Context = context;
    if (userId === null) {
      return 'Token expired';
    }
    return true;
  }),
  isAdmin: rule()((parent, args, ctx) => {
    const {role}: Context = ctx;
    return role === Role.ADMIN ? true : 'No rules';
  })
};

export const permissions = shield(
  {
    Query: {
      '*': rules.isAuthenticatedUser,
      user: rules.isAdmin,
      users: rules.isAdmin,
      partOfSpeechDescs: allow,
    },
    Mutation: {
      '*': rules.isAuthenticatedUser,
      signup: allow,
      login: allow,
    },
  },
  {
    allowExternalErrors: true,
  },
);
