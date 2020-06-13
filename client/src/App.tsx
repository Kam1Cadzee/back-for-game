import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LayoutPage from './pages/LayoutPage';
import {ApolloProvider, useMutation,} from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import FRAGMENTS from './graphql/fragments';
import QUERIES from './graphql/queries';
import 'antd/dist/antd.css';
import './App.css';
import { ApolloLink } from '@apollo/client';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const authLink: any = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => ({ headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`, // however you get your token
      ...headers
    }}));
  return forward(operation);
});
const link = new HttpLink({
  uri: 'http://localhost:3005/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
  connectToDevTools: true,
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
        console.log(mutationResult)
        proxy.writeData({
          data: {
            isAuth: true,
            currentUser: mutationResult.data.refreshUser
          }
        });
      },
      onError: error => {}
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
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Content/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
