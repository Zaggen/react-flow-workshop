// @flow
import * as React from 'react'

// TODO: Type styled
declare var styled: any

// TODO: Add Prop types for Input

const Input = styled.input`
  background: ${props => (props.isActive ? 'red' : 'white')};
`

type Props = {
  value: string,
  onChange: Function,
}

const Component = ({ value }: Props) => (
  <form>
    <Input type="text" name="userName" value={value} isActive isGlowing />
  </form>
)
