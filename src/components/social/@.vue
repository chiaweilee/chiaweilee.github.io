<template>
  <app-page>
    <app-topbar :theme="theme || 'dark-blue'" transition>
      <app-button left history-back>
        <span>back</span>
      </app-button>
      <app-title>
        @{{ at }}
      </app-title>
    </app-topbar>
    <app-content>
      <component v-if="!!compo" :is="compo" @theme="setTheme"/>
    </app-content>
  </app-page>
</template>

<script>
export default {
  data () {
    return {
      theme: null,
      compo: null,
      meta: null
    }
  },
  created () {
    this.mount()
  },
  computed: {
    at: function () {
      return this.$route.params.at
    }
  },
  destroyed () {
    if (this.meta) {
      this.removeMeta(this.meta)
      this.newMeta({
        name: 'theme-color',
        content: '#fff'
      })
    }
  },
  methods: {
    setTheme (to) {
      this.theme = to
      // eslint-disable-next-line
      const color = sassVars[`$${to}`]
      if (color && color.hex) {
        const meta = document.getElementsByTagName('meta')
        // check and remove old
        Object.keys(meta).every(i => {
          if (meta[i].name !== 'theme-color') {
            return true
          }
          // remove old
          this.removeMeta(meta[i])
          return false
        })
        // not found, append new
        this.newMeta({
          name: 'theme-color',
          content: color.hex
        })
      }
    },
    removeMeta (node) {
      document.getElementsByTagName('head')[0].removeChild(node)
    },
    newMeta (option) {
      const meta = this.meta = document.createElement('meta')
      Object.keys(option).forEach(key => {
        meta[key] = option[key]
      })
      document.getElementsByTagName('head')[0].appendChild(meta)
    },
    mount () {
      this.compo = () => import(`./extend/${this.at}`)
    }
  }
}
</script>
