const PF = require('pathfinding')

export default class Matrix {
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
    _.forEach(([y, x]) => { // in matrix: x => y, y => x
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
