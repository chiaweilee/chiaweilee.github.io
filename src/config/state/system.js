export default {
  state: {
    coldStart: true,
    serverTimeDiff: 0,
    transition: '',
    history: []
  },
  mutations: {
    _fixTime (state, time) {
      if (isNaN(time)) return
      state.serverTimeDiff = time - (new Date()).valueOf()
    },
    _slideLeft (state) {
      state.transition = 'slide-left'
    },
    _slideRight (state) {
      state.transition = 'slide-right'
    },
    _noTransition (state) {
      state.transition = ''
    },
    _warmStart (state) {
      state.coldStart = false
    },
    _historyPush (state, { name, query, params }) {
      !!name && state.history.push({ name, query, params })
    },
    _historyPop (state) {
      state.history.pop()
    }
  },
  getters: {
    now: state => () => (new Date()).valueOf() + state.serverTimeDiff,
    history: state => state.history,
    transition: state => state.transition,
    coldStart: state => state.coldStart
  }
}
