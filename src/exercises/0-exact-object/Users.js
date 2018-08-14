// @flow
import * as React from 'react'
import User from './User'

type Birthdate = {| month: number, day: number, year: number |}

type Props = {|
  users: {
    name: string,
    birtdate: Birthdate,
  }[],
|}

const Users = ({ users }: Props) => (
  <ul>{users.map((user, i) => <User key={i} name={user.name} />)}</ul>
)

export default Users
