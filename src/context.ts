import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import { PrismaClient } from '@prisma/client';
import { getUserId } from './utils/getUserId';
import { Container } from "typedi";

const prisma = new PrismaClient();

const test = async () => {
  const res = await prisma
    .irrverb.findMany({
      where: {
       OR: [
         {
           form1EN: 'broke'
         },
         {
           form2EN: 'broke'
         },
         {
           form3EN: 'broke'
         },
       ]
      }
    })

  console.log(res)
};
test();

export interface Context {
  prisma: PrismaClient;
  userId: string;
}

export function createContext(req: ExpressContext): Context {
  const userId = getUserId(req.req);
  const context = { userId, prisma };
  Container.set({ id: "PRISMA_CONTEXT", factory: () => context });
  return context;
}
