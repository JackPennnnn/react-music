import { Map } from 'immutable'
import * as actionType from './constants'

const defaultState = Map({
    currentSong:{}
})

export function reducer(state = defaultState,action){
    switch (action.type) {
        case actionType.CHANGE_SONG_DETAIL:
            return state.set('currentSong',action.currentSong)
        default:
            return state
    }
}