import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LayoutPage from './pages/LayoutPage';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, useMutation, useQuery} from '@apollo/react-hooks';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import FRAGMENTS from './graphql/fragments';
import QUERIES from './graphql/queries';
import 'antd/dist/antd.css';
import './App.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://192.168.31.66:3005/graphql',
  cache,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  onError: error => {
    console.log('------------------');
    console.log(error);
    console.log('------------------');
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
