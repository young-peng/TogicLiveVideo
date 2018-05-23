/**
 * Created by py on 18-5-22.
 */
import {createAction} from 'redux-actions'
import * as markdown from 'markdown'
import * as types from '../constants/ActionTypes'
import * as layoutService from '../services/layoutService'

export const getLayoutByTab = createAction(types.GET_LAYOUT_BY_TAB, (tab, params) => {
    return  layoutService.getLayoutByTab(tab, params)
}, (tab) => {
    return {
        tab
    }
});

export const updateLayoutByTab = createAction(types.UPDATE_LAYOUT_BY_TAB, (tab) => {
    return  layoutService.getLayoutByTab(tab)
}, (tab) => {
    return {
        tab,
        sync: 'cell'
    }
})