import 'reflect-metadata';
import {isDevelopment} from './utils/nodeEnv';
import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import { Container } from "typedi";
import {createContext} from './context';
import {applyMiddleware} from 'graphql-middleware';
import config from './config';
import {buildSchema} from 'type-graphql';
import configTypeGraph from '../configTypeGraph';
import {permissions} from './permissions/permission';
import cors from 'cors';
import serviceABBYY from './service/abbyyService';
import * as path from 'path';

const startServer = async () => {
  await configTypeGraph({
    blackList: [
      'UserCrudResolver',
      'WordCrudResolver',
      'CreateUserResolver',
      'CreateWordResolver',
      'CreateTranslateResolver',
      'TranslateCrudResolver',
      {
        file: 'User',
        fields: ['password', 'createdAt']
      },
      {
        file: 'UserCreateInput',
        fields: ['createdAt']
      }
    ]
  });
  const middleware = applyMiddleware(await bootstrap(), permissions);
  const resultABBYY = await serviceABBYY.auth();

  if(resultABBYY !== true) {
    console.log(`Service ABBYY doesn't work, is crash on auth method`);
  }
  const server = new ApolloServer({
    schema: middleware,
    context: createContext,
    uploads: true,
    introspection: isDevelopment,
    playground: isDevelopment,
    formatError: (err) => {
      const message: any = {
        message: err.message,
        code: err.extensions.code,
        method: err.path,
      };
      if (isDevelopment) {
        return err;
      }
      return message;
    },
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client/build/index.html'))
  });

  server.applyMiddleware({app, path: '/graphql'});

  app.listen({port: config.port}, () =>
    console.log(
      `🚀 Server ready at: http://localhost:${config.port}${server.graphqlPath}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
  );
};

startServer();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/type-graphql/index.{ts,js}', __dirname + '/graphql/**/*.{ts,js}'],
    emitSchemaFile: true,
    container: Container
  });
  return schema;
}
