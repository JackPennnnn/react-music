import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import {NavLink} from "react-router-dom";

import { getSongDetailAction } from "../store/actionCreators";
import { getSizeImage,formatDate,getPlayUrl } from "../../../utils/format-utils";

import { PlaybarWrapper,Control,PlayInfo,Operator } from "./style";
import { Slider } from "antd";


export default memo(function () {
    //state
    const [currentTime, setCurrentTime] = useState(0)
    const [progress,setProgress] = useState(0)
    const [isPlaying,setIsPlaying] = useState(false)
    //是否当时现在改变
    const [isChanging, setIsChanging] = useState(false)

    const dispatch = useDispatch()

    const { currentSong } = useSelector(state => ({
        currentSong:state.getIn(['player','currentSong'])
    }),shallowEqual)

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    },[dispatch])

    useEffect(() => {
        audioRef.current.src = getPlayUrl(currentSong.id)
    },[currentSong])



    const audioRef = useRef()

    const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
    const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
    const duration = currentSong.dt || 0
    const showDuration = formatDate(duration,"mm:ss")
    const showCurrentTime = formatDate(currentTime,"mm:ss")

    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    },[isPlaying])
    const timeUpdates = (e) => {
        setCurrentTime(e.target.currentTime * 1000)
        if(!isChanging){
            setProgress(( currentTime / duration ) * 100)
        }
    }

    const sliderChange = useCallback((value) => {
        setIsChanging(true)
        setProgress(value)
    },[])
    const sliderAfterChange = useCallback((value) => {
        audioRef.current.currentTime = value / 100 * duration / 1000
        setCurrentTime((value / 100 * duration / 1000) * 1000)
        setIsChanging(false)

        if(!isPlaying){
            playMusic()
        }
    },[duration,isPlaying,playMusic])

    return (
        <PlaybarWrapper className='sprite_playbar'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <button className='sprite_playbar prev'></button>
                    <button className='sprite_playbar play' onClick={e => playMusic()}></button>
                    <button className='sprite_playbar next'></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to='/discover/player'>
                            <img src={getSizeImage(picUrl,35)} alt="" />
                        </NavLink>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='song-name'>{currentSong.name}</span>
                            <a className='singer-name'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange}></Slider>
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
                                <span className='divider'>/</span>
                                <span className='duration'>{showDuration}</span>
                            </div>
                        </div>
                    </div>

                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"></button>
                        <button className="sprite_playbar btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdates}></audio>

        </PlaybarWrapper>
    )
})