import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export default (initialState = {}) => {
  const history = createBrowserHistory();
  const middleware = [thunk, routerMiddleware(history)];

  return createStore(rootReducer, initialState
    , applyMiddleware(...middleware))
}