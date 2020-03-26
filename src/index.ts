import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { createContext } from "./context";
import config from "./config";

new ApolloServer({ schema, context: createContext }).listen(
  { port: config.port },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${config.port}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`
    )
);
