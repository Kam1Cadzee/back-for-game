import 'reflect-metadata';
import { isDevelopment } from './utils/nodeEnv';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { Container } from 'typedi';
import { createContext } from './context';
import { applyMiddleware } from 'graphql-middleware';
import config from './config';
import { buildSchema } from 'type-graphql';
import { permissions } from './permissions/permission';
import cors from 'cors';
import serviceABBYY from './service/abbyyService';
import morgan from 'morgan';
import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});
logger.stream = {
  write: function (message, encoding) {
    logger.info(message);
  },
} as any;

const myPlugin = {
  requestDidStart(requestContext) {
    if (requestContext.request.operationName === 'IntrospectionQuery') return;
    let [typeQuery, name] = requestContext.request.query.split('{');
    name = name.match(/[a-z]+/)[0];
    const userId = requestContext.context.userId || 'null';
    logger.info(
      `userId: ${userId}, query: ${typeQuery}, operationName: ${name}, variables: ${JSON.stringify(
        requestContext.request.variables,
      )}`,
    );
  },
};

const startServer = async () => {
  const middleware = applyMiddleware(await bootstrap(), permissions);
  const resultABBYY = await serviceABBYY.auth();

  if (resultABBYY !== true) {
    console.log(`Service ABBYY doesn't work, is crash on auth method`);
  }
  const server = new ApolloServer({
    schema: middleware,
    context: createContext,
    uploads: true,
    introspection: isDevelopment,
    playground: isDevelopment,
    plugins: [myPlugin],
    formatError: (err) => {
      console.log(err);
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

  app.use(
    morgan(':method :url :status - :response-time ms', {
      stream: logger.stream,
    }),
  );
  app.use(cors());
  app.use(express.json());

  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: config.port }, () =>
    console.log(
      `🚀 Server ready at: http://localhost:${config.port}${server.graphqlPath}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
  );
};

startServer();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      __dirname + '/type-graphql/index.{ts,js}',
      __dirname + '/graphql/**/*.{ts,js}',
    ],
    emitSchemaFile: true,
    container: Container,
  });
  return schema;
}
