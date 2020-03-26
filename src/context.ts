import { ExpressContext } from "apollo-server-express/src/ApolloServer";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  req: Request;
}

export function createContext(req: ExpressContext): Context {
  return { ...req, prisma };
}
