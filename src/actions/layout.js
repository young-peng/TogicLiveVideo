/**
 * Created by py on 18-5-22.
 */
import {createAction} from 'redux-actions'
import * as markdown from 'markdown'
import * as types from '../constants/ActionTypes'
import * as layoutService from '../services/layoutService'

export const getlayoutByTab = createAction(types.GET_LAYOUT_BY_TAB, async(tab, params) => {
    return await layoutService.getLayoutByTab(tab, params)
}, (tab) => {
    return {
        tab
    }
})