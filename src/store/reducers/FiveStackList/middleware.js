import { createFiveStack } from './actions';
import { getKeys, arrayToHashMap } from '../../../library/helpers/utils';
import { loremIpsum } from 'lorem-ipsum';
import uuidv1 from 'uuid/v1';


const FiveStackListMiddleWare = () => {
  // Setup socket connection here.

  return store => next => {

    const playerId = uuidv1();
    const fiveStackId = uuidv1();

      store.dispatch(
        createFiveStack([
          {
            id: fiveStackId,
            captain: playerId, 
            timestamp: new Date().setMinutes(30),
            Title: loremIpsum({
                count: 1,
                units: "sentences",
            }),
            Description: loremIpsum(),
            playerList: {
                playerId: {
                    name: 'Puppey',
                    role: 'Hard Support',
                    playerId: playerId,
                    captain: true
                },
            }
          },
        ])
      );

    return action => {
      next(action);
    };
  };
};

export default FiveStackListMiddleWare();
