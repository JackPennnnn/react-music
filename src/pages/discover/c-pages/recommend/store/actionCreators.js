import * as actionType from './constants'

import {getTopBanners} from "../../../../../services/recommend";

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