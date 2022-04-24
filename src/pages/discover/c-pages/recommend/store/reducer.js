import { Map } from 'immutable'

import * as actionType from './constants'

const defaultState = Map({
    topBanners: [],
    hotRecommends:[],
    newAlbums:[],
    topRankings:{
        topUpList:{},
        topNewList:{},
        topOriginList:{}
    },
    settleSings:[]
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_TOP_BANNERS:
            return state.set('topBanners',action.topBanners)
        case actionType.CHANGE_HOT_RECOMMENDS:
            return state.set('hotRecommends',action.hotRecommends)
        case actionType.CHANGE_NEW_ALBUMS:
            return state.set('newAlbums',action.newAlbums)
        case actionType.CHANGE_TOP_RANKING:
            return state.setIn(['topRankings',action.name],action.playList)
        case actionType.CHANGE_SETTLE_SONGER:
            return state.set("settleSings", action.settleSings)
        default:
            return state
    }
}

export default reducer