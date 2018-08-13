// @flow
import * as React from 'react'
import styled from 'styled-components'
// TODO: Create library support for styled components
// TODO: Consider trying emotion instead and check the typings

type EnhancedComp<A, B> = React.ComponentType<{
  ...$Exact<A>,
  ...$Exact<B>,
}>

type HTMLElements = {
  a: {| href?: string, getInnerRef?: (el: ?HTMLAnchorElement) => void |},
}

declare var xtyled: {
  a: ((() => Object) => React.ComponentType<$ElementType<HTMLElements, 'a'>>) &
    (<P: {||}>(
      (props: P) => Object,
    ) => React.ComponentType<{|
      ...$Exact<$ElementType<HTMLElements, 'a'>>,
      ...$Exact<P>,
    |}>),
  li: <P: {||}>(
    (props: P) => Object,
  ) => React.ComponentType<{| href: string, ...$Exact<P> |}>,
}

type Styled<Type, P> = (
  (props: P) => Object,
) => React.ComponentType<{|
  ...$Exact<$ElementType<HTMLElements, Type>>,
  ...$Exact<P>,
|}>

type Styledx<Type: string, Props> = any

const Input: Styledx<'a', {| isActive: boolean |}> = styled.input`
  background: ${props => (props.isActive ? 'red' : 'white')};
`

const makeLink: Styled<'a', {| primary: boolean |}> = xtyled.a

const Link = makeLink(props => ({
  minWidth: '12rem',
  margin: '0 auto 20px',
  padding: props.primary ? 18 : 16,
  border: props.primary ? 'none' : '3px solid currentColor',
  background: props.primary && 'linear-gradient(90deg, #D26AC2, #46C9E5)',
  color: props.primary ? '#1D2029' : '#D26AC2',
  '&:hover': {
    opacity: '0.95',
  },
  '@media (min-width: 768px)': {
    margin: '0 20px 0 0',
    '&:last-child': {
      margin: 0,
    },
  },
}))

const Link2 = xtyled.a(() => ({
  minWidth: '12rem',
}))

type Props = {
  value: string,
  onChange: Function,
}

const Component = ({ value }: Props) => (
  <form>
    <Input type="text" name="userName" value={value} isActive isGlowing />
    <Link primary href="/lorem" test="s7" />
    <Link2 href="/lorem" />
  </form>
)
