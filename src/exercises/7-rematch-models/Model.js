// @flow
type State = number

export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state: State) {
      return (payload: number): State => state + payload
    },
    multiply(state: State) {
      return (payload: Object): State => state + payload.x
    },
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: Object) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.increment(payload)
    },
  }),
}

export default count
