export default target => {
  const now = new Date()
  const month = now.getMonth()
  return require('lodash/map')(new Array(target), (d, i) => {
    const countMonth = (month + i + 1)
    const targetMonth = countMonth % 12
    const targetYear = now.getFullYear() + Math.floor(countMonth / 12)
    return [targetYear, !targetMonth ? 12 : targetMonth, 1].join('-')
  })
}
