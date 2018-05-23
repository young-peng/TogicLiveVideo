import * as types from '../constants/ActionTypes'

const initialState = {
  index: [],
  hot: [],
  zone: [],
  my: [],
}


export default function (state = initialState, action) {
  const {payload, error, meta = {}, type} = action
  const {sequence = {}, tab, id = '0'} = meta

  if (sequence.type === 'start' || error) {
    return state
  }

  switch (type) {
    case types.GET_REDUCER_FROM_ASYNC_STORAGE:
      return {
        ...state,
        ...(payload.cell || initialState)
      }
    case types.GET_LAYOUT_BY_TAB:
      return {
        ...state,
        [tab]: state[tab]
      }
    case types.UPDATE_LAYOUT_BY_TAB:
      return {
        ...state,
        [tab]: payload
      }
    case types.GET_TOPIC_BY_ID:
      return {
        ...state,
        cell: {
          ...state.cell,
          [id]: payload
        }
      }
    case types.REMOVE_TOPIC_CACHE_BY_ID:
      delete state.cell[id]
      return {
        ...state,
        cell: {
          ...state.cell,
          [id]: undefined
        }
      }
    default:
      return state
  }
}
