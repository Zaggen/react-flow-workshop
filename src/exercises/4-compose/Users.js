// @flow
import * as React from 'react'
import { pure } from 'recompose'
import User from './User'

type Props = {|
  users: $ReadOnlyArray<{ name: string, age: number }>,
|}

const Users = (props: Props) => (
  <ul>
    {props.users.map(user => (
      <User key={user.name} name={user.name} age={user.age} />
    ))}
  </ul>
)

export default pure(Users)
