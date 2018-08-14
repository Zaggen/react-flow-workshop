// @flow
import * as React from 'react'

// TODO: Type styled
declare var styled: any

const Link = styled.a(props => ({
  minWidth: '12rem',
  margin: '0 auto 20px',
  padding: props.primary ? 18 : 16,
  border: props.primary ? 'none' : '3px solid currentColor',
  '&:hover': {
    opacity: '0.95',
  },
}))

const Link2 = styled.a(() => ({
  minWidth: '12rem',
}))

type Props = {
  value: string,
  onChange: Function,
}

const Component = ({ value }: Props) => (
  <form>
    <Link primary href="/lorem" test="s7" />
    <Link2 href="/lorem" />
  </form>
)
