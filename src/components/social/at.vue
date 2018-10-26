<template>
  <router-link :to="{name: '@', params: {at}}">@{{ at }}</router-link>
</template>

<script>
const isEqual = a => b => a === b
export default {
  name: 'AtLink',
  computed: {
    at () {
      return this['@']
    }
  },
  props: {
    '@': {
      type: String,
      required: true
    }
  },
  beforeDestroy () {
    this.will()
  },
  methods: {
    will () {
      const to = this.$route
      if (isEqual(to.name)('@') && isEqual(to.params)({ at: this.at })) {
        console.log(`@${this.at}`)
      }
    }
  }
}
</script>
