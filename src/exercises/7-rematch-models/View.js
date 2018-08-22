// @flow
import * as React from 'react'
import type { State, Dispatch } from './allModels.types'
import type { Connect } from './connect.type'

declare var connect: Connect

const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
)

const mapState = state => ({
  count: state.count,
})

const mapDispatch = ({ count }) => ({
  increment: () => count.increment(1),
  incrementAsync: () => count.incrementAsync(1),
})

const CountContainer = connect(
  mapState,
  mapDispatch,
)(Count)
