import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store/index'
import {reducer as playerReducer} from '../pages/player/store/index'


export default combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})