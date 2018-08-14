// @flow
// TODO: Add types to withRandomHOC
// TODO: Add types to the enhanced comp
import * as React from 'react'

function withRandomHOC<P>(Component) {
  return (props: P) => <Component random={Math.random()} {...props} />
}

export default withRandomHOC

const NumberComponent = props => <span>{props.random}</span>

const enhanced = withRandomHOC(NumberComponent)
