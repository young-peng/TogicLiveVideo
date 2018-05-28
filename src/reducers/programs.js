/**
 * Created by py on 18-5-23.
 */
import * as types from '../constants/ActionTypes'
const initialState = {
   programs:[],
   program:{},
}

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    const {sequence = {}  } = meta
    if (sequence.type === 'start' || error) {
        return state
    }

    switch (type) {
        case types.GET_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: payload,
            }
        case types.UPDATE_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: payload,
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