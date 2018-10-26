import Vue from './vue'
import routerBuilder from './router'
import store from './store'
import App from './App'
import './registerServiceWorker'

require('fastclick').attach(document.body)

new Vue({
  router: routerBuilder(store),
  store,
  render: h => h(App)
}).$mount('#app')
