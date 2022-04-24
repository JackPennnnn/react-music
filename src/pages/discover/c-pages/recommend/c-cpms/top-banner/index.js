import React, {memo,useEffect,useRef,useCallback,useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";


import {
    BannerWrapper,
    BannerRight,
    BannerControl,
    BannerLeft
} from './style'
import {getTopBannerAction} from "../../store/actionCreators";
import { Carousel } from 'antd'

export default memo(function (){

    const [currentIndex,setCurrentIndex] = useState(0)

    // 回调函数 返回一个对象给一个变量
    const {topBanners} = useSelector(state => ({
        // topBanners: state.get('recommend').get('topBanners')
        topBanners:state.getIn(["recommend","topBanners"])
    }),shallowEqual)
    const dispatch = useDispatch()
    // hook
    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getTopBannerAction())
    },[dispatch])

    const bannerChange = useCallback((from,to) => {
        setCurrentIndex(to)
    },[])

    const bgImageUrl = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=48x20')
    return (
        <BannerWrapper bgImage={bgImageUrl}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.title}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>

                </BannerRight>

                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})