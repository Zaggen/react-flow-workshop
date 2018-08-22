// @flow
import * as React from 'react'
import type { State, Dispatch } from './allModels.types'

export type Connect = <MS, MP, R1, R2>(
  mapState: (state: $ReadOnly<State>) => R1,
  mapDispatch: (state: $ReadOnly<Dispatch>) => R2,
) => (
  React.ComponentType<$ReadOnly<{ ...$Exact<R1>, ...$Exact<R2> }>>,
) => React.ComponentType<{}>
