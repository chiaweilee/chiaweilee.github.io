<template>
  <opening
    v-if="!hot"
    @end="hot = true"/>
  <transition
    :name="$store.getters.transition"
    v-else>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="app transition"/>
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      class="app transition"/>
  </transition>
</template>

<script>
export default {
  name: 'AppView',
  components: {
    opening: () => import('./opening')
  },
  data () {
    return {
      hot: false
    }
  }
}
</script>

<style lang="scss">
  .app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    transform: translateZ(0);
    position: absolute;
  }

  .transition {
    transition: all .2s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
    overflow-x: hidden;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
    overflow-x: hidden;
  }
</style>
