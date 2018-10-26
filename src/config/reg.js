import variables from './variables'

const reg2string = reg => reg.toString().replace(/^\/([^/]*)\/$/, '$1')

const regx = {
  at: new RegExp(`[${variables.keyword.allowCharacter}]{${variables.keyword.minLength},${variables.keyword.maxLength}}`),
  key: new RegExp(`[${variables.keyword.allowCharacter}]{${variables.keyword.minLength},${variables.keyword.maxLength}}`)
}

Object.keys(regx).forEach(r => {
  regx[r] = {
    reg: regx[r],
    string: reg2string(regx[r])
  }
})

export default regx
