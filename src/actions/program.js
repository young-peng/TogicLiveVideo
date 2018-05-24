/**
 * Created by py on 18-5-23.
 */
import {createAction} from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as programService from '../services/programService'

export const getProgramByCategoryId = createAction(types.GET_PROGRAMS_BY_CATEGORYID, async(categoryId, params) => {
    return await programService.getProgramByCategoryId(categoryId, params)
}, (programs) => {
    return {
        programs
    }
});

export const updateProgramByCategoryId = createAction(types.UPDATE_PROGRAMS_BY_CATEGORYID, async(categoryId, params) => {
    return await programService.getProgramByCategoryId(categoryId, {page_no:1})
}, (programs) => {
    return {
        programs,
        sync: 'programs'
    }
});