import { rule, shield, deny, allow } from 'graphql-shield';
import { Context } from '../context';

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const { userId }: Context = context;
    if (userId === null) {
      return 'Token expired';
    }
    return true;
  }),
};

export const permissions = shield(
  {
    Query: {
      '*': rules.isAuthenticatedUser,
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
