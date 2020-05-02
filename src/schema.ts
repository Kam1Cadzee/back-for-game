import Query from './resolvers/Query';
import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema } from 'nexus';
import User from './models/User';
import AuthPayload from './models/AuthPayload';
import Mutation from './resolvers/Mutation';

console.log(__dirname + '/../schema.graphql')
export const schema = makeSchema({
  types: [Query, User, Mutation, AuthPayload],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
});
