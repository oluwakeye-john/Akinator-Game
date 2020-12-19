export const state = () => ({
  started: false,
})

const SET_STARTED = 'SET_STARTED'

export const mutations = {
  [SET_STARTED](state, value) {
    state.started = value
  },
}

export const actions = {
  setStarted({ commit }, payload) {
    commit(SET_STARTED, payload)
  },
}
