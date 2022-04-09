import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    },
    isAuthenticated: false,
    token: ''
  },

  getters: {
  },

  mutations: {
    // initialize the store and check if user is authenticated
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },

    // set token when user is logged in
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },

    // remove token when user logs out
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    }
  },

  actions: {
  },

  modules: {
  }
})
