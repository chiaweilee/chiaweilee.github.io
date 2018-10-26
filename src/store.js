import Vue from 'vue'
import Vuex from 'vuex'
import system from './config/state/system'
import cache from './config/state/cache'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system: system,
    cache: cache
  }
})
