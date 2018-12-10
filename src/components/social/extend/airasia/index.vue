<template>
  <div v-if="loading < 1">
    loading {{ loading | percentage }}
  </div>
  <div v-else>
    <ul>
      <li
        v-for="route in Object.keys(tickers)"
        :key="route">
        <dl>
          <dt>{{ route }} {{ getPrice(route) }}</dt>
          <dd
            v-for="(price, date) in tickers[route]"
            :key="date">
            {{ date }}
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import name from './name'

export default {
  data () {
    return {
      loading: 0
    }
  },
  computed: {
    tickers () {
      return this.$store.state.cache[name]
    }
  },
  beforeCreate () {
    this.$nextTick(function () {
      this.$emit('theme', 'red')
    })
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$store.dispatch(`$${name}`, {
        progress: (finish, all) => {
          this.loading = finish / all
        }
      })
    },
    getPrice (route) {
      return this.tickers[route][Object.keys(this.tickers[route])[0]]
    }
  }
}
</script>
