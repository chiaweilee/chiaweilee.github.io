import Vue from 'vue'
import filters from './config/filters'
import components from './config/components'
import app from 'app.vue'
import VueProgressBar from 'vue-progressbar-v'
import 'app.vue/src/scss/app.scss'
import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(app)
Vue.use(VueProgressBar)

Object.keys(components).forEach(c => {
  Vue.component(c, components[c])
})

Object.keys(filters).forEach(f => {
  Vue.filter(f, filters[f])
})

export default Vue
