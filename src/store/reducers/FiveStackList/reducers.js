import { getKeys, arrayToHashMap } from '../../../library/helpers/utils';



import {
  CREATE_FIVESTACKLIST
} from './actions';

const initialState = {
  FiveStack: {},
  FiveStackId: []
};

// const initialState = {
//     FiveStack: {
//         1: {
//             playerList: {
//                 '1a': {
//                     playerName: 'Arteezy',
//                     Lane: 'Hard Carry'
//                 },
//                 '2a': {
//                     playerName: 'ArtStyle',
//                     Lane: 'Offlane'
//                 },
//                 '3a': {
//                     playerName: 'Dendi',
//                     Lane: 'Safe Lane'
//                 }
//             },
//             playerListId: ['1a', '2a', '3a' ]
//         },
//         2: {
//             playerList: {
//                 '1b': {
//                     playerName: 'Admiral Bulldog',
//                     Lane: 'Offlane'
//                 },
//                 '2b': {
//                     playerName: 'Loda',
//                     Lane: 'Hard Carry'
//                 },
//                 '3b': {
//                     playerName: 'EGM',
//                     Lane: 'Support'
//                 }
//             },
//             playerListId: ['1b', '2b', '3b', '4b']
//         }
//     },
//     FiveStackId: [1,2]
// }

const reducers = [];

reducers[CREATE_FIVESTACKLIST] = (state, action) => {
  const { payload } = action;

  console.log(payload)

  return {
    ...state,
  };
};

export default (state = initialState, action) =>
  action.type in reducers ? reducers[action.type](state, action) : state;

