import { isDevelopment } from './utils/nodeEnv';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { schema } from './schema';
import { createContext } from './context';
import { applyMiddleware } from 'graphql-middleware';
import multer from 'multer';
import config from './config';
import { permissions } from './permissions/permission';

const middleware = applyMiddleware(schema, permissions);

const app = express();
const storage = multer.memoryStorage();
//app.use(multer({storage}).single('file'));


const server = new ApolloServer({
  schema: middleware,
  context: createContext,
  uploads: true,
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

server.applyMiddleware({app});

app.listen({ port: config.port }, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${config.port}${server.graphqlPath}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
  ),
);
