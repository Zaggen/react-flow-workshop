// @flow
import * as React from 'react'

// TODO: Deprecate usage of age as is no longer required

type Props = {
  name: string,
  age: number,
}

const User = ({ name, age }: Props) => <li>{`${name} is ${age} old`}</li>

export default User
