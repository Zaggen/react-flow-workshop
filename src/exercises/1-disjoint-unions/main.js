// @flow
import * as React from 'react'
import Modal from './Modal'

// TODO: After fixing Modal props, add missing props

const Main = () => (
  <Modal
    isOpen
    title="Dijoint Unions FTW!"
    text="Woah, I see some coodependant props here :/"
    animate
    width={13}
    height={43}
  />
)

export default Main
