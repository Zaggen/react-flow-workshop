// @flow

// TODO: Add version without payload and overload (&) second version
type CreateAction = Function

declare var createAction: CreateAction

const showAction = createAction('SHOW')

const animateAction = createAction('ANIMATE', { x: 4, y: 5 })
