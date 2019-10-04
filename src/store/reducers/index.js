


import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import homePageReducer from '../../library/pages/HomePage/reducers';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    homePage: homePageReducer
});

export default (state, action) =>
   rootReducer(state, action);