// @flow
import * as React from 'react'

// TODO: Deprecate usage of age as is no longer required

type Props = {|
  name: string,
|}

const User = ({ name }: Props) => <li>{name}</li>

export default User
