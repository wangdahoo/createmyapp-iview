/* eslint no-unused-vars: off */

import http from '@/services/http'

const types = {
  SYNC_DASHBOARD: 'SYNC_DASHBOARD'
}

const initState = () => ({
  username: '',
  avatar: ''
})

const state = initState()

const getters = {

}

const mutations = {
  [types.SYNC_DASHBOARD] (state, payload) {
    state.username = payload.username
    state.avatar = payload.avatar
  }
}

const actions = {
  login ({commit}, form) {
    const {username, password} = form
    return http('/api/login', {
      method: 'POST',
      body: form
    })
  },

  getDashboardData ({commit}) {
    return http('/api/dashboard')
      .then(data => data.payload)
      .then(payload => {
        commit(types.SYNC_DASHBOARD, payload)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
