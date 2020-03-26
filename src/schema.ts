import { nexusPrismaPlugin } from "nexus-prisma";
import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
  mutationType,
  mutationField
} from "nexus";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "./models/User";
import AuthPayload from "./models/AuthPayload";
import config from "./config";

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.user();
    t.crud.users({
      filtering: true
    });
  }
});

const Mutation = mutationType({
  definition(t) {
    t.field("signup", {
      type: "AuthPayload",
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword
          }
        });
        return {
          token: sign({ userId: user.id }, config.app_secret),
          user
        };
      }
    });
  }
});

export const schema = makeSchema({
  types: [Query, User, Mutation, AuthPayload],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts"
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      {
        source: require.resolve("./context"),
        alias: "Context"
      }
    ]
  }
});
