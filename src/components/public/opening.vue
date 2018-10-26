<template>
  <div class="opening">
    <div class="scene">
      <div>
        <span ref="left" v-text="'Dear'"/>
      </div>
      <div>
        <span ref="right" v-text="'red'"/>
        <span class="dot" ref="dot"/>
      </div>
    </div>
  </div>
</template>

<script>
// Inspire by https://codepen.io/maximebonhomme/pen/WxkJRk

import 'gsap/CSSPlugin.js'
import TimelineLite from 'gsap/TimelineLite.js'
import { Bounce, Expo } from 'gsap/EasePack'

export default {
  name: 'Opening',
  data () {
    return {
      delay: 1,
      duration: 1.2,
      stay: 1
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    end () {
      this.$emit('end')
    },
    start () {
      const $left = this.$refs.left
      const $right = this.$refs.right
      const $dot = this.$refs.dot
      const rightW = $right.offsetWidth
      const mainDuration = this.duration
      const tl = new TimelineLite({ delay: this.delay, paused: false })
      const timeout = (this.duration + this.delay + this.stay) * 1000
      tl
        .to($left, mainDuration, { xPercent: 101, ease: Expo.easeIn })
        .to($right, mainDuration, { xPercent: -101, ease: Expo.easeIn }, `-=${mainDuration}`)
        .to($dot, mainDuration, { x: -rightW, ease: Expo.easeIn }, `-=${mainDuration}`)
        .to($dot, 0.2, { y: -16 })
        .to($dot, 0.6, { y: 0, ease: Bounce.easeOut })
        .to($dot, 1, { x: -rightW + 15 }, '-=0.8')
      setTimeout(this.end, timeout)
    }
  }
}
</script>

<style scoped lang="scss">
  $background-color: #fff;
  $main-color: #000;
  $font-size: 2rem;
  $dot-size: 0.15 * $font-size;
  $dot-color: #f03;

  .opening {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: $background-color;
    z-index: 2147483647;
    .scene {
      margin: 0;
      color: $main-color;
      font-size: $font-size;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }

    div {
      position: relative;
      display: flex;
      padding: 0 $font-size / 10;
      overflow: hidden;

      &:nth-child(2) {
        padding-right: $font-size * 0.22;
      }

      & > span:not(.dot) {
        display: inline-block;
      }
    }

    .dot {
      position: absolute;
      bottom: $dot-size;
      right: 0;
      display: block;
      width: $dot-size;
      height: $dot-size;
      background-color: $dot-color;
      border-radius: 50%;
      font-size: 0;
    }
  }
</style>
