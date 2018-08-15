// @flow
import React from 'react'
import type { State, Dispatch } from './allModels.types'

declare var connect: Function

const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
)

const mapState = (state: State) => ({
  count: state.count,
})

const mapDispatch = ({ count }: Dispatch) => ({
  increment: () => count.increment(1),
  incrementAsync: () => count.incrementAsync(1),
})

const CountContainer = connect(
  mapState,
  mapDispatch,
)(Count)
