import Vue from 'vue'
import Router from 'vue-router'
import reg from '@/config/reg'

Vue.use(Router)

const routerBuilder = store => {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        meta: {},
        components: {
          default: r => require.ensure([], () => r(require('@/components/home.vue')), 'home')
        }
      },
      {
        path: '/@:at(' + reg.at.string + ')',
        name: '@',
        meta: {
          transition: false
        },
        components: {
          default: r => require.ensure([], () => r(require('@/components/social/@.vue')), '@')
        }
      },
      {
        path: '*',
        name: '404',
        meta: {},
        components: {
          default: r => require.ensure([], () => r(require('@/components/error/404.vue')), 'error')
        }
      }
    ]
  })

  router.beforeEach(function (to, from, next) {
    if (!store.getters.coldStart) {
      // @warmStart
      // go history
      const history = store.getters.history
      const target = history.length - 2
      if (to.name === history[target] && history[target].name) {
        // history back
        store.commit('_historyPop')
        // slide left
        store.commit('_slideLeft')
      } else {
        // progress start
        store._vm.$Progress.start()
        // history go new
        store.commit('_historyPush', { name: to.name, query: to.query, params: to.params })
        // slide right
        if (to.meta.transition === false) {
          store.commit('_noTransition')
        } else {
          store.commit('_slideRight')
        }
      }
    } else {
      // @coldStart
      // new history
      store.commit('_historyPush', { name: from.name, query: from.query, params: from.params })
      store.commit('_historyPush', { name: to.name, query: to.query, params: to.params })
    }
    // go next route
    next()
  })

  router.afterEach(function (to, from) {
    // warm start
    if (store.getters.coldStart) store.commit('_warmStart')
    // progress finish
    store._vm.$Progress.finish()
  })

  return router
}

export default routerBuilder
