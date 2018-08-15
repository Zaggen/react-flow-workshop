// @flow
import type { CountActions, CountState, UserActions, UsersState } from './types'
import type { GetDispatch, Model } from './helperTypes'

export type Dispatch = GetDispatch<{ count: CountActions, user: UserActions }>

export type State = {
  count: CountState,
  user: UsersState,
}

export type CountModel = Model<CountState, CountActions, Dispatch, State>
export type UserModel = Model<UsersState, UserActions, Dispatch, State>

export type Models = {
  count: CountModel,
  user: UserModel,
}
