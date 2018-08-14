// @flow
import * as React from 'react'
import { compose, pure, withHandlers } from 'recompose'

type Props = {|
  name: string,
  age: number,
|}

const User = props => (
  <li onClick={() => props.sayHi(props.name)}>
    {`${props.name} is ${props.age} old.`}
  </li>
)

const enhancer = compose(
  withHandlers({
    sayHi() {
      return name => alert(`Hello ${name}`)
    },
  }),
)

export default (enhancer(User): React.ComponentType<Props>)
