// @flow

export type GetState<Models> = $ObjMap<
  Models,
  <M>(model: M) => $ElementType<M, 'state'>,
>

export type CountState = number

export type CountActions = {
  pure: {
    increment: { payload: number },
    multiply: { payload: { x: number, y: number } },
  },
  effects: {
    incrementAsync: { payload: number },
  },
}

export type UsersState = { name: string }[]

export type UserActions = {
  pure: {
    add: { payload: { name: string } },
    remove: { payload: { id: number } },
  },
  effects: {
    createAsync: { payload: { name: string } },
  },
}
