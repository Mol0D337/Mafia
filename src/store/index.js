import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import info from './modules/info'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    info
  }
})
