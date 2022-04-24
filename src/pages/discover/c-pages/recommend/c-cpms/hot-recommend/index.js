import React, {memo, useEffect} from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";

import {
    HotRecommendWrapper
} from './style'
import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import SongsCover from "../../../../../../components/songs-cover";

export default memo(function (){
    const dispatch = useDispatch()

    const { hotRecommends } = useSelector(state => ({
        hotRecommends:state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <ThemeHeaderRecommend title='热门推荐' keywords={["华语","流行","民谣","摇滚","电子"]}></ThemeHeaderRecommend>
            <div className='recommend-list'>
                {
                    hotRecommends.map((item,index) => {
                        return (
                            <SongsCover info={item} key={item.id}></SongsCover>
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})