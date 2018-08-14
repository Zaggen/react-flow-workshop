// @flow
// TODO: Add types to withRandomHOC
// TODO: Add types to the enhanced comp
import * as React from 'react'

function withProps(newProps) {
  return Component => props => <Component {...{ ...props, ...newProps }} />
}

export default withProps

const NumberComponent = props => <span>{props.x}</span>

const EnhancedComp = withProps({
  x: 3,
})(NumberComponent)
