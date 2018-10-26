export default {
  appView: () => import(/* webpackChunkName: "root" */ '@/components/public/app-view'),
  opening: () => import(/* webpackChunkName: "root" */ '@/components/public/opening'),
  at: () => import(/* webpackChunkName: "social-at" */ '@/components/social/at.vue'),
  snake: () => import(/* webpackChunkName: "game-snake" */ '@/components/game/snake.vue')
}
