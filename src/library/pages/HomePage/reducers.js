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
      1: [
        {
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
                }
              
    ],
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
