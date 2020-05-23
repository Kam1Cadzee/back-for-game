import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import { PrismaClient } from '@prisma/client';
import { getUserId } from './utils/getUserId';
import { Container } from "typedi";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  userId: string;
}

export function createContext(req: ExpressContext): Context {
  const userId = getUserId(req.req) || '1';
  const context = { userId, prisma };
  Container.set({ id: "PRISMA_CONTEXT", factory: () => context });
  return context;
}
