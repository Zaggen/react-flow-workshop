// @flow
import * as React from 'react'
import type { HTMLElements } from './html-elements'

// Emotion
export type Styled<Type, P> = (
  (props: P) => Object,
) => React.ComponentType<{|
  ...$Exact<$ElementType<HTMLElements, Type>>,
  ...$Exact<P>,
|}>

export type Emotion = {
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
