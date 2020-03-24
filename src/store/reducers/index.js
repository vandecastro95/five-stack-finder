


import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import FiveStackListReducer from './FiveStackList/reducers';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    FiveStackList: FiveStackListReducer
});

export default (state, action) =>
   rootReducer(state, action);