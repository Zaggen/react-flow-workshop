// @flow
import * as React from 'react'
import type { Emotion, Styled } from './types/emotion'

declare var styled: Emotion

const makeLink: Styled<'a', {| primary: boolean |}> = styled.a

const Link = makeLink(props => ({
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
