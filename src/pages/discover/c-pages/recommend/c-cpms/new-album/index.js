import React, {memo, useEffect, useRef} from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import {getNewAlbumsAction} from "../../store/actionCreators";

import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { AlbumWrapper } from './style'
import { Carousel } from "antd";
import AlbumCover from "../../../../../../components/album-cover";

export default memo(function () {

    const dispatch = useDispatch()

    const carouselRef = useRef()

    const {newAlbums} = useSelector(state => {
        return {
            newAlbums: state.getIn(['recommend','newAlbums'])
        }
    }, shallowEqual)

    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch])

    return (
        <AlbumWrapper>
            <ThemeHeaderRecommend title='新碟上架'></ThemeHeaderRecommend>
            <div className="content">
                <div className="arrow arrow-left sprite_02"
                     onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel ref={carouselRef} dots={false}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbums.slice(item*5, (item+1)*5).map(item => {
                                                return (
                                                    <AlbumCover key={item.id} info={item}/>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02"
                     onClick={e => carouselRef.current.next()}></div>
            </div>
        </AlbumWrapper>
    )
})