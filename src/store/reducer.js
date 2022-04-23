import { combineReducers } from 'redux'

import { reducer as recommendReducer  } from '../pages/discover/c-pages/recommend/store/index'



export default combineReducers({
    recommend: recommendReducer
})