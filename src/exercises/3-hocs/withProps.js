// @flow
// TODO: Add types to withRandomHOC
// TODO: Add types to the enhanced comp
import * as React from 'react'

type HOC<OuterP, InnerP> = (
  React.ComponentType<{
    ...$Exact<OuterP>,
    ...$Exact<InnerP>,
  }>,
) => React.ComponentType<OuterP>

function withProps<O: {}, I: {}>(newProps: I): HOC<O, I> {
  return Component => props => <Component {...{ ...props, ...newProps }} />
}

export default withProps

const NumberComponent = props => <span>{props.x}</span>

const EnhancedComp: React.ComponentType<{}> = withProps({
  x: 3,
})(NumberComponent)
