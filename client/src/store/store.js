import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // The sequence is as follows:
  // In order to change token which is a property of state,
  // first the actions is invoked which in turn invokes the corresponding mutation
  strict: true,
  // This state variables will be used for controlling parts of the application
  state: {
    user: null,
    token: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!token // if (token) state.isUserLoggedIn = true; else state.isUserLoggedIn = false;
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    // The actions list hold async function that usually have the same name as those in mutations
    setToken ({commit}, token) {
      commit('setToken', token) // here we are passing the function name in mutations as first parameter
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
