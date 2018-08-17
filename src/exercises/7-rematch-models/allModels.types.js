// @flow
import type { CountInterface, UserInterface } from './types'
import type { GetDispatch, GetState, GetModels } from './helperTypes'

type Interfaces = {
  count: CountInterface,
  user: UserInterface,
}

export type Dispatch = GetDispatch<Interfaces>

export type State = GetState<Interfaces>

export type Models = GetModels<Interfaces, Dispatch, State>

export type Model<N> = $ElementType<Models, N>
