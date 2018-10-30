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
const PF = require('pathfinding')

class Matrix {
  constructor (x = 0, y) {
    const _this = this
    const t = Array.from({ length: x }, () => 0)
    const neo = Array.from({ length: y || x }, () => t)
    this.reload = () => {
      _this.one = _this.clone(neo)
      _this.err = false
      return _this
    }
    this.reload()
  }

  clone (_) {
    const cloned = _.constructor()
    for (let key in _) {
      cloned[key] = this.clone(_[key])
    }
    return cloned
  }

  revolution (_) {
    _.forEach(([x, y]) => {
      if (typeof this.one[x] === 'undefined' || typeof this.one[x][y] === 'undefined' || this.one[x][y] === 1) {
        this.err = true
      } else {
        this.one[x][y] = 1
      }
    })
    return this
  }

  path ([x, y], [X, Y]) {
    const grid = new PF.Grid(this.one)
    const finder = new PF.BiBestFirstFinder({
      allowDiagonal: false
    })
    return finder.findPath(x, y, X, Y, grid)
  }
}

export default {
  name: 'SnakeGame',
  data () {
    return {
      mg: 0.8,
      food: [8, 8],
      snake: [[1, 4], [1, 3], [1, 2], [1, 1]]
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
  },
  mounted () {
    this.autogame()
  },
  methods: {
    autogame () {
      setTimeout(() => {
        this.run()
        this.autogame()
      }, 500)
    },
    walk ([x, y]) {
      this.snake.unshift([x, y])
      if (x !== this.food[0] || y !== this.food[1]) {
        // not eat
        this.snake.pop()
      } else {
        // eat
        this.food = [1, 1]
      }
    },
    run () {
      const matrix = new Matrix(this.w, this.h)
        .revolution(this.snake)
      if (!matrix) {
        console.log('game over')
        return
      } else {
        const path = matrix.path(this.snake[0], this.food)
        if (!path[1]) {
          console.log('game over')
          return
        } else {
          const next = path[1]
          this.walk(next)
        }
      }
      matrix.reload()
    }
  }
}
</script>
