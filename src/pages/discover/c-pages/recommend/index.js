import React,{memo, useEffect} from "react";

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'


export default memo(function (props){

    // 回调函数 返回一个对象给一个变量
    const {topBanners} = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }),shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopBannerAction())
    },[dispatch])

    return (
        <div>
            {topBanners.length}
        </div>
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
