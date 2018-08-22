// @flow

const user = {
  state: [{ name: 'Lu' }], // initial state
  reducers: {
    add(state, payload) {
      return state
    },
    remove(state, payload) {
      return state
    },
  },
  effects: dispatch => ({
    async createAsync(payload, rootState) {
      //await dispatch.count.incrementAsync()
    },
  }),
}

export default user
