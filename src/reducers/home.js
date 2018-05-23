/**
 * Created by py on 18-5-21.
 */
import * as types from '../constants/ActionTypes'
import * as TABS from '../constants/Tabs'

const tabs = TABS.tabs

let initialState = {}

tabs.forEach((item) => {
    initialState[item] = {
        pullRefreshPending: false,
        reachedEndPending: false,
        flag: 0
    }
})

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    const {sequence = {}, tab} = meta
    const pending = sequence.type === 'start'

    switch (type) {
        case types.GET_LAYOUT_BY_TAB:
            return {
                ...state,
                [tab]: {
                    ...state[tab],
                    reachedEndPending: pending
                }
            }
        case types.UPDATE_LAYOUT_BY_TAB:
            return {
                ...state,
                [tab]: {
                    ...state[tab],
                    pullRefreshPending: pending
                }
            }
        default:
            return state
    }
}
