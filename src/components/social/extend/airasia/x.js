import request from './request'
import name from './name'

export default {
  state: {
    [name]: null
  },
  mutations: {
    [`_${name}`] (state, t) {
      if (!t) return
      state[name] = t
      if (sessionStorage) sessionStorage.setItem(name, JSON.stringify(t))
    }
  },
  actions: {
    [`$${name}`]: request
  },
  getters: {}
}
