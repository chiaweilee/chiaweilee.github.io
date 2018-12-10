import Vue from './vue'
import r from './router'
import store from './store'
import addToHomeScreen from './addToHomeScreen'
import './registerServiceWorker'

require('fastclick').attach(document.body)

addToHomeScreen()
  .then(prompt => prompt())

new Vue({
  router: r(store),
  store,
  render: h => h({
    name: 'App',
    render: h => <app-view/>
  })
}).$mount('#app')
