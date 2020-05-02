import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { getUserId } from './utils/getUserId';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  userId: string;
}

export function createContext(req: ExpressContext): Context {
  const userId = getUserId(req.req);
  return { userId, prisma };
}
