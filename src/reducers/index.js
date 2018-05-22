/**
 * Created by py on 18-5-21.
 */
import { combineReducers } from 'redux'
import home from './home'
import topic from './topic'
import utils from './utils'
export default combineReducers({
    home,
    topic,
    utils
})