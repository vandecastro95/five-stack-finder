import React from 'react';
import configureStore, { history } from './store/store.js';
import { ConnectedRouter } from 'connected-react-router'; //changed from 'react-router-redux
import { Provider } from 'react-redux';
import AppRouter from './library/routes'

const initialState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : {};
const store = configureStore(initialState);

function App() {
     return(
       <div>
        <Provider store={ store }>
          <ConnectedRouter history={history}>
            <AppRouter />
          </ConnectedRouter>
        </Provider>
    </div>
    )
  };

export default App;
