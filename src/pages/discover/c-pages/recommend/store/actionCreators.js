import * as actionType from './constants'

import {getTopBanners, getHotRecommend, getNewAlbum, getTopList,getArtistList} from "../../../../../services/recommend";

const changeTopBannerAction = (res) => ({
    type: actionType.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

const changeHotRecommendAction = (res) => ({
    type: actionType.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}


const changeNewAlbumsAction = (res) => ({
    type: actionType.CHANGE_NEW_ALBUMS,
    newAlbums:res.albums
})

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumsAction(res))
        })
    }
}
// playlist
const changeTopRankings = (res,name) => ({
    type:actionType.CHANGE_TOP_RANKING,
    playList:res.playlist,
    name
})

export const getTopRankings = (idx,name) => {
    return dispatch => {
        getTopList(idx).then(res => {
            dispatch(changeTopRankings(res,name))
        })
    }
}


const changeSettleSingsAction = (res) => ({
    type: actionType.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
})

export const getSettleSingers = () => {
    return dispath => {
        getArtistList(5, 5001).then(res => {
            dispath(changeSettleSingsAction(res))
        })
    }
}