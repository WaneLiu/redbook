import {combineReducers} from 'redux'
import category from './categoryReducer'
import home from './homeReducer'

const rootReducer = combineReducers({
    category, home
})

export default rootReducer