// @flow
import * as React from 'react'

// TODO: Fix flow issues by using disjoint unions to specify coodependant props
// TODO: Simplify if checks after fixing props

type Props =
  | {|
      isOpen: boolean,
      title: string,
      text: string,
    |}
  | {|
      isOpen: boolean,
      width: number,
      height: number,
      animate: boolean,
      title: string,
      text: string,
    |}

const Modal = (props: Props) => {
  let styles = {}
  if (props.animate) {
    styles = buildAnimationStyles(props.width, props.height)
  }
  return (
    <div style={styles}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

function buildAnimationStyles(width: number, height: number) {
  return { transform: `translate(${width / 2}px) && ${height / 2}px)` }
}

export default Modal
