import {
    PLAYERDATA_INIT
  } from './actions'; 


import { playerData, gameData } from './data';

const reducers = [];

const initialState = {
    playerData: {
        ...playerData
    },
    matches: {
        ...gameData
    }
    
  };

reducers[PLAYERDATA_INIT] = (state) => {
    console.log('sdasd')
    return {
      ...state,
      initialState
    };
  };

  export default (state = initialState, action) =>
  action.type in reducers ? reducers[action.type](state, action) : state;
