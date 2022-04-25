import { getSongDetail } from "../../../services/player";
import * as actionType from "./constants";

const changeSongDetailAction = res => ({
    type:actionType.CHANGE_SONG_DETAIL,
    currentSong:res
})

export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            dispatch(changeSongDetailAction(res.songs[0]))
        })
    }
}