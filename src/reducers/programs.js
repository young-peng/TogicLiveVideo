/**
 * Created by py on 18-5-23.
 */
import * as types from '../constants/ActionTypes'
const initialState = {
   programs:[]
}

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    const {sequence = {} ,programs } = meta

    if (sequence.type === 'start' || error) {
        return state
    }

    switch (type) {
        case types.GET_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: payload
            }
        case types.UPDATE_PROGRAMS_BY_CATEGORYID:
            return {
                ...state,
                programs: state[programs].concat(payload)
            }
        default:
            return state
    }
}