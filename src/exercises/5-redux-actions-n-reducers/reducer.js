// @flow
import type { $User, List, Map } from './types'
import {
  FETCH_USERS_SUCCESS,
  ADD_USER,
  REMOVE_USER,
  type $UserActions,
} from './actions'

export type $State = List<$User>

function usersReducer(state: $State = [], action: $UserActions): $State {
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
