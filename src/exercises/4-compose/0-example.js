// @flow
// TODO: Use type inference from compose
import * as React from 'react'
import { compose, pure, withHandlers, withProps } from 'recompose'
import Users from './Users'

const Page = props => (
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

export default (enhancer(Page): React.ComponentType<{}>)
