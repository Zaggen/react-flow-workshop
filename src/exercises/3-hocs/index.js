// @flow
// TODO: Add types to withRandomHOC
// TODO: Add types to the enhanced comp
import * as React from 'react'

type Component<T> = React.ComponentType<T>

type EnhancedComp<A, B> = React.ComponentType<{
  ...$Exact<A>,
  ...$Exact<B>,
}>

function withRandomHOC<P>(
  Component: EnhancedComp<P, { random: number }>,
): Component<P> {
  return (props: P) => <Component random={Math.random()} {...props} />
}

export default withRandomHOC

const NumberComponent = props => <span>{props.random}</span>

const enhanced: Component<{}> = withRandomHOC(NumberComponent)
