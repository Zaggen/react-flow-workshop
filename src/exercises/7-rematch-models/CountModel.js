// @flow
type State = number

export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload
    },
    multiply(state, payload) {
      return state + payload.x
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      const user = rootState.user[0]
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
      dispatch.user.createAsync(payload)
    },
  }),
}

export default count
