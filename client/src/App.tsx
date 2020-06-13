import React, {useEffect} from 'react';
import { notification } from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LayoutPage from './pages/LayoutPage';
import {ApolloProvider, useMutation, useQuery,} from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import QUERIES from './graphql/queries';
import 'antd/dist/antd.css';
import './App.css';
import { ApolloLink, from } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { onError } from "@apollo/link-error";
import {IErrorDev, IErrorProd} from './typings/IError';
import { ApolloClient } from 'apollo-boost';
import {isDevelopment} from './utils/env';

console.log(process.env)
const linkError = onError(({ graphQLErrors = [], networkError, operation, forward, response }) => {
  console.log({ graphQLErrors, networkError, operation, forward, response });
  console.log(process.env.NODE_ENV);
  if(isDevelopment) {
    graphQLErrors.map((e: IErrorDev | any) => {
      notification.error({
        message: e.message
      })
    })
  }
  else {
    graphQLErrors.map((e: IErrorProd | any) => {
      notification.error({
        message: e.message
      })
    })
  }
});

const authLink: any = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => ({ headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`, // however you get your token
      ...headers
    }}));
  return forward(operation);
});
const link = new HttpLink({
  uri: isDevelopment ? 'http://localhost:3005/graphql' : 'https://englishnew.herokuapp.com/grpahql',
});

const cache: any = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  link: from([
    authLink,
    linkError,
    link,
  ]) as any,
  connectToDevTools: true,
  defaultOptions: {
    mutate: {
      errorPolicy: 'ignore'
    },
    query: {
      errorPolicy: 'ignore'
    }
  }
});

cache.writeData({
  data: {
    isAuth: false,
    currentUser: null,
  },
});
function App() {
  const Content = () => {
    const [refresh] = useMutation(QUERIES.REFRESH_USER, {
      update: (proxy, mutationResult) => {
        proxy.writeData({
          data: {
            isAuth: true,
            currentUser: mutationResult.data.refreshUser
          }
        });
      },
    });

    useEffect(() => {
      refresh();
    }, []);

    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={AuthPage}/>
            <Route path="/main/:item?" component={LayoutPage}/>
          </Switch>
      </div>
    )
  };

  return (
    <ApolloProvider client={client as any}>
      <BrowserRouter>
      <Content/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
