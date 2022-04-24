import React,{memo, } from "react";

import {
    RecommendWraper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'
import TopBanner from "./c-cpms/top-banner";
import HotRecommend from "./c-cpms/hot-recommend";
import NewAlbum from "./c-cpms/new-album";
import RecommendRanking from "./c-cpms/recommend-ranking";
import UserLogin from "./c-cpms/user-login";
import SettleSinger from "./c-cpms/settle-singer";
import HotRadio from "./c-cpms/hot-radio";
export default memo(function (props){
    return (
        <RecommendWraper>
            <TopBanner></TopBanner>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotRecommend></HotRecommend>
                    <NewAlbum></NewAlbum>
                    <RecommendRanking></RecommendRanking>
                </RecommendLeft>
                <RecommendRight>
                    <UserLogin></UserLogin>
                    <SettleSinger></SettleSinger>
                    <HotRadio></HotRadio>
                </RecommendRight>
            </Content>
        </RecommendWraper>
    )
})



// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })
//
// const mapDispatchToProps = dispatch => ({
//     getBanner:() => {
//         dispatch(getTopBannerAction())
//     }
// })
//
// export default connect(mapStateToProps,mapDispatchToProps)(memo(function (props){
//
//     const {getBanner,topBanners} = props
//     useEffect(() => {
//             getBanner()
//     },[getBanner])
//
//     return (
//         <div>
//             {topBanners.length}
//         </div>
//     )
// }))
