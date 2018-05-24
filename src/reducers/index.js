/**
 * Created by py on 18-5-21.
 */
import { combineReducers } from 'redux'
import home from './home'
import utils from './utils'
import cell from "./cell"
import programs from "./programs"
export default combineReducers({
    home,
    utils,
    cell,
    programs
})