// @flow
import React from 'react'
import { pure } from 'recompose'
import User from '../0-exact-object/User'

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
