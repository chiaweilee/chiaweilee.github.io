import Vue from 'vue'
import filters from '@chiaweilee/filters'
import components from './config/components'
import app from 'app.vue'
import VueProgressBar from 'vue-progressbar-v'
import 'app.vue/src/scss/app.scss'
import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(app)
Vue.use(filters, [
  'percentage'
])
Vue.use(VueProgressBar)

Object.keys(components).forEach(c => {
  Vue.component(c, components[c])
})

export default Vue
