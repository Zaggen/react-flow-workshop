// @flow
import type { Model } from './allModels.types'

const count: Model<'count'> = {
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
      const user = rootState.user
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
      dispatch.user.createAsync({ name: user.name })
      dispatch.count.multiply({ x: 3, y: 5 })
    },
  }),
}

export default count
