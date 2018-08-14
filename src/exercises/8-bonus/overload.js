// @flow

type CreateAction = (<T>(action: T) => { type: T }) &
  (<T, P>(action: T, data: P) => { type: T, payload: P })

declare var createAction: CreateAction

const showAction = createAction('SHOW')

const animateAction = createAction('ANIMATE', { x: 4, y: 5 })
