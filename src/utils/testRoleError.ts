import {ApolloError} from 'apollo-server-errors';

export const throwErrorIfTestUser = (role: string, error: string) => {
  if(role === 'TEST') {
    throw new ApolloError(error, "NO ACCESS")
  }
};
