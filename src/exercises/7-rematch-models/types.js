// @flow

// TODO: Define CountState here

// TODO: Define CountActions here

// Example

export type UsersState = { name: string }[]

export type UserActions = {
  pure: {
    add: { payload: { name: string } },
    remove: { payload: { id: number } },
  },
  effects: {
    createAsync: { payload: { name: string } },
  },
}
