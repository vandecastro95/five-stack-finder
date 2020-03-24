import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import {logger} from '../library/middleware/logger';
import FiveStackListMiddleWare from './reducers/FiveStackList/middleware';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger,
        //FiveStackListMiddleWare,
      )
    )
  );

  return store;
}
