

export const PLAYERDATA_INIT = 'player/init';

export const FIVESTACK_CREATE = 'fivestack/select/request';

export const playerDataInit = () => ({
    type: PLAYERDATA_INIT
  });

  export const fivestackCreate = () => ({
    type: FIVESTACK_CREATE
  });