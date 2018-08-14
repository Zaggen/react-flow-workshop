// @flow
import count from './Model'
import type { GetDispatch, GetState } from './types'

const models = { count }

export type State = GetState<typeof models>

export type Dispatch = GetDispatch<typeof models>
