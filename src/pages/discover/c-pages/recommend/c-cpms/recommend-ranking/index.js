import React, {memo,useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopRankings} from "../../store/actionCreators";

import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import {RankingWrapper} from "./style";
import TopRanking from "../../../../../../components/top-ranking";
export default memo(function () {

    const dispatch = useDispatch()

    const {topUpList,topNewList,topOriginList} = useSelector(state => ({
        topUpList:state.getIn(['recommend','topRankings','topUpList']),
        topNewList:state.getIn(['recommend','topRankings','topNewList']),
        topOriginList:state.getIn(['recommend','topRankings','topOriginList']),
    }),shallowEqual)

    useEffect(() => {
        dispatch(getTopRankings(0,'topUpList'))
        dispatch(getTopRankings(2,'topNewList'))
        dispatch(getTopRankings(3,'topOriginList'))
    },[dispatch])

    return (
        <RankingWrapper>
            <ThemeHeaderRecommend title='榜单'></ThemeHeaderRecommend>
            <div className="tops">
                <TopRanking info={topUpList}/>
                <TopRanking info={topNewList}/>
                <TopRanking info={topOriginList}/>
            </div>
        </RankingWrapper>
    )
})