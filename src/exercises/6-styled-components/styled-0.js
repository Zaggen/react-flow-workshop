// @flow
import * as React from 'react'
import type { Styled } from './types/styled-components'

declare var styled: any

type InputProps = {| isActive: boolean |}

const Input: Styled<'input', InputProps> = styled.input`
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
