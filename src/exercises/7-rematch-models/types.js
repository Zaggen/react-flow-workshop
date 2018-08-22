// @flow

// TODO: Define CountInterface here

// Example

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
