// @flow
// TODO: Add types for state and action
import { FETCH_USERS_SUCCESS, ADD_USER, REMOVE_USER } from './actions'

function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return action.payload.users
    }
    case ADD_USER: {
      return state.concat([action.payload.user])
    }
    case REMOVE_USER: {
      const userId = action.payload.user.id
      return state.filter(user => user.id === userId)
    }
    default:
      return state
  }
}

export default usersReducer
