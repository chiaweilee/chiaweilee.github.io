import routes from './routes'
import api from './api'
import name from './name'
import date from './date'

const forEach = require('lodash/forEach')

export default function ({ commit }, { progress }) {
  if (sessionStorage) {
    const cache = sessionStorage.getItem(name)
    if (cache) {
      if (typeof progress === 'function') progress(1, 1)
      commit('_' + name, JSON.parse(cache))
      return
    }
  }
  const result = {}
  const months = date(36)
  const percent = [0, months.length * routes.length * 2]
  const next = (ticker) => {
    percent[0]++
    if (ticker) require('lodash/merge')(result, ticker)
    if (typeof progress === 'function') progress.apply(null, percent)
    if (percent[0] === percent[1]) filter(result)
  }
  const filter = result => {
    forEach(result, (r, k) => {
      const min = require('lodash/min')(require('lodash/toArray')(r))
      forEach(result[k], (s, i) => {
        if (s !== min) {
          delete result[k][i]
        }
      })
    })
    commit('_' + name, result)
  }
  // create jobs
  routes.forEach(r => {
    months.forEach(m => {
      fetch(api(r[0])(r[1])(r[2])(m)) // one way
        .then(response => response.status === 200 && response.json())
        .then(ticker => {
          next(ticker)
        })
        .catch(err => {
          console.error(err)
          next()
        })
      fetch(api(r[0])(r[2])(r[1])(m)) // return
        .then(response => response.status === 200 && response.json())
        .then(ticker => {
          next(ticker)
        })
        .catch(err => {
          console.error(err)
          next()
        })
    })
  })
}
