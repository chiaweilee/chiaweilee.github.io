<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :height="h * pix" :width="w * pix">
    <rect x="0" y="0" :height="h * pix" :width="w * pix" :style="{ stroke: '', fill: bg }"/>
    <template v-if="snake" v-for="(s, i) in snake">
      <rect :key="i" :x="s[0] * pix + pix * (1 - mg) / 2" :y="s[1] * pix + pix * (1 - mg) / 2" :height="pix * mg" :width="pix * mg" :style="{ fill: '#3c3' }"/>
    </template>
    <rect v-if="food" :x="food[0] * pix + pix * (1 - mg) / 2" :y="food[1] * pix + pix * (1 - mg) / 2" :height="pix * mg" :width="pix * mg" :style="{ fill: '#dc3' }"/>
  </svg>
</template>

<script>
// const random = (a, b) => Math.min(a, b) + Math.round(Math.abs(a - b) * Math.random())

export default {
  name: 'SnakeGame',
  data () {
    return {
      mg: 0.8,
      food: null,
      snake: [[4, 5], [5, 5]]
    }
  },
  props: {
    pix: {
      type: Number,
      default: 10
    },
    w: {
      type: Number,
      default: 11
    },
    h: {
      type: Number,
      default: 11
    },
    bg: {
      type: String,
      default: '#ddd',
      validator: t => /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(t)
    }
  }
}
</script>
