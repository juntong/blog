import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'

import lesson from './lesson'

Vue.use(Vuex)

let store = () => {
  return new Vuex.Store({
    plugins: [pathify.plugin],
    actions: {
      nuxtServerInit ({ dispatch }, { req }) {
        dispatch('lesson/fetchCategory')
      }
    },
     modules: {
        lesson
     }
  })
}

export default store
