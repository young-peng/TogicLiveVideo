/**
 * Created by py on 18-5-23.
 */
import * as types from '../constants/ActionTypes'
const initialState = {
   programs:[],
   program:{},
   pullRefreshPending: false,
}

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    const {sequence = {} ,programs } = meta
    const pending = sequence.type === 'start'
    if (sequence.type === 'start' || error) {
        return state
    }

    switch (type) {
        case types.GET_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: payload,
                pullRefreshPending: pending
            }
        case types.UPDATE_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: payload,
                pullRefreshPending: pending
            }
        case types.GET_PROGRAM_BY_ID:
            return {
                ...state,
                program:payload
            }
        default:
            return state
    }
}