import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  

  const logger = createLogger({
    collapsed: true,
  });

  const store = createStore(
    rootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger
        // ... other middlewares ...
      )
    )
  );

  return store;
}
