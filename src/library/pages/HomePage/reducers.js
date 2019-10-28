import {
    PLAYERDATA_INIT,
    FIVESTACK_CREATE
  } from './actions'; 


import { playerData, gameData } from './data';

const reducers = [];

const initialState = {
    playerData: {
        ...playerData
    },
    matches: {
        ...gameData
    },
    fiveStack: {
      fiveStackList: {
      1: {
        teamName: 'Navi',
        description: '',
        playDays: ['Fri, Sat, Sun'],
        playTime: '',
        fiveStackAvatar: 'data:image/png;base64,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',
        mmrHigh: 3000,
        mmrLow: 4000,
        captainAccount_id: 187379213,
        players: [{
          "tracked_until":"1572117866",
          "solo_competitive_rank":3373,
          "profile":{
          "account_id":187379213,
          "personaname":"Dendi",
          "name":null,
          "plus":true,
          "cheese":0,
          "steamid":"76561198147644941",
          "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816.jpg",
          "avatarmedium":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_medium.jpg",
          "avatarfull":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_full.jpg",
          "profileurl":"https://steamcommunity.com/profiles/76561198147644941/",
          "last_login":"2019-09-26T19:01:58.447Z",
          "loccountrycode":null,
          "is_contributor":false
          },
          "competitive_rank":3789,
          "rank_tier":54,
          "mmr_estimate":{
          "estimate":3701
          },
          "leaderboard_rank":null
          },
          {
            "tracked_until":"1572117866",
            "solo_competitive_rank":3373,
            "profile":{
            "account_id":187379213,
            "personaname":"Puppey",
            "name":null,
            "plus":true,
            "cheese":0,
            "steamid":"76561198147644941",
            "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816.jpg",
            "avatarmedium":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_medium.jpg",
            "avatarfull":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_full.jpg",
            "profileurl":"https://steamcommunity.com/profiles/76561198147644941/",
            "last_login":"2019-09-26T19:01:58.447Z",
            "loccountrycode":null,
            "is_contributor":false
            },
            "competitive_rank":3789,
            "rank_tier":54,
            "mmr_estimate":{
            "estimate":3701
            },
            "leaderboard_rank":null
            },
            {
              "tracked_until":"1572117866",
              "solo_competitive_rank":3373,
              "profile":{
              "account_id":187379213,
              "personaname":"LightOfHeaven",
              "name":null,
              "plus":true,
              "cheese":0,
              "steamid":"76561198147644941",
              "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816.jpg",
              "avatarmedium":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_medium.jpg",
              "avatarfull":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_full.jpg",
              "profileurl":"https://steamcommunity.com/profiles/76561198147644941/",
              "last_login":"2019-09-26T19:01:58.447Z",
              "loccountrycode":null,
              "is_contributor":false
              },
              "competitive_rank":3789,
              "rank_tier":54,
              "mmr_estimate":{
              "estimate":3701
              },
              "leaderboard_rank":null
              },
              {
                "tracked_until":"1572117866",
                "solo_competitive_rank":3373,
                "profile":{
                "account_id":187379213,
                "personaname":"ArtStyle",
                "name":null,
                "plus":true,
                "cheese":0,
                "steamid":"76561198147644941",
                "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816.jpg",
                "avatarmedium":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_medium.jpg",
                "avatarfull":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a1c9da8a0fa55ca94d75317dedc19cbfcf5cc816_full.jpg",
                "profileurl":"https://steamcommunity.com/profiles/76561198147644941/",
                "last_login":"2019-09-26T19:01:58.447Z",
                "loccountrycode":null,
                "is_contributor":false
                },
                "competitive_rank":3789,
                "rank_tier":54,
                "mmr_estimate":{
                "estimate":3701
                },
                "leaderboard_rank":null
                }]
              
              },
    },
    fiveStackListIds: [
      1
    ]
  }
  };

reducers[PLAYERDATA_INIT] = (state) => {
    console.log('sdasd')
    return {
      ...state,
      initialState
    };
  };

reducers[FIVESTACK_CREATE] = (state) => {
  console.log('fivestack create')
  return {
    ...state,
    initialState
  }
}


  export default (state = initialState, action) =>
  action.type in reducers ? reducers[action.type](state, action) : state;
