import {ExpressContext} from 'apollo-server-express/src/ApolloServer';
import {PrismaClient} from '@prisma/client';
import {getContentFromToken} from './utils/getContentFromToken';
import {Container} from 'typedi';
import {Role} from './type-graphql/enums';

const prisma = new PrismaClient();

export interface Context {
  userId: number | null;
  role: Role | null;
  prisma: PrismaClient;
}

export function createContext(req: ExpressContext): Context {
  Container.set({id: 'PRISMA_CONTEXT', factory: () => { return  prisma; }});
  const contentFromToken = getContentFromToken(req.req);
  const {userId, role} = contentFromToken;
  return {userId, prisma, role};
}
