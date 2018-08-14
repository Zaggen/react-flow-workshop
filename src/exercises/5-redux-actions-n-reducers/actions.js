// @flow

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

const actions = {
  fetchUsers: () => ({
    type: FETCH_USERS,
  }),

  fetchUsersSuccess: users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users },
  }),

  addUser: user => ({
    type: ADD_USER,
    payload: { user },
  }),

  removeUser: user => ({
    type: REMOVE_USER,
    payload: { user },
  }),
}

export default actions

// export type $UserActions = ???
