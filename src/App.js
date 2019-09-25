import React from 'react';
import configureStore, { history } from './store/store.js';
import { ConnectedRouter } from 'connected-react-router'; //changed from 'react-router-redux
import { Provider } from 'react-redux';
import AppRouter from './library/routes'
import './App.css';

const initialState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : {};
const store = configureStore(initialState);

function App() {
     return(
        <Provider store={ store }>
          <ConnectedRouter history={history}>
            <AppRouter />
          </ConnectedRouter>
        </Provider>
    )
  };

export default App;
