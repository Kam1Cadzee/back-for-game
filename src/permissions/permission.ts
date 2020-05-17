import { rule, shield, deny, allow } from 'graphql-shield';
import { Context } from '../context';
import {isDevelopment} from '../utils/nodeEnv';

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    return isDevelopment;
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
