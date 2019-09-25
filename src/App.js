import React from 'react';
import createStore from './store/store.js';
import { Provider } from 'react-redux';
import AppRouter from './library/routes'

const initialState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : {};
const store = createStore(initialState);

function App() {
     return(
       <div>
        <Provider store={ store }>
        <AppRouter />
        </Provider>
    </div>
    )
  };

export default App;
