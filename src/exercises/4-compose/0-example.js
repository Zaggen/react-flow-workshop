// @flow
// TODO: Use type inference from compose
import React from 'react'
import { compose, pure, withHandlers, withProps } from 'recompose'
import Users from './Users'

type EnhancedProps = {
  alert: Function,
  users: $ReadOnlyArray<{ name: string, age: number }>,
}

const Page = (props: EnhancedProps) => (
  <div>
    <p onClick={props.alert}>React App + Flow</p>
    <Users users={props.users} />
  </div>
)

const enhancer = compose(
  withHandlers({
    alert() {
      return () => alert('Welcome')
    },
  }),
  withProps({
    users: [{ name: 'Lu', age: 30 }],
  }),
)

export default enhancer(Page)
