// @flow

export type CountInterface = {
  state: number,
  actions: {
    pure: {
      increment: number,
      multiply: { x: number, y: number },
    },
    effects: {
      incrementAsync: number,
    },
  },
}

export type UserInterface = {
  state: {| +name: string |}[],
  actions: {
    pure: {
      add: { name: string },
      remove: { id: number },
    },
    effects: {
      createAsync: { name: string },
    },
  },
}
