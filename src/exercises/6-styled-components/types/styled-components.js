// @flow
import * as React from 'react'
import type { HTMLElements } from './html-elements'

export type Styled<Type, P> = React.ComponentType<{|
  ...$Exact<$ElementType<HTMLElements, Type>>,
  ...$Exact<P>,
|}>
