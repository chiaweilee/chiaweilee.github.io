const resolve = require('path').resolve
const title = require('./src/config/title')
const SassVariables = require('sass-variables-webpack-plugin')

// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: title
    }
  },
  configureWebpack: {
    plugins: [
      SassVariables(resolve(__dirname, './src/assets/scss/_variables.scss'))
    ]
  },
  // to use the template option in Vue components, extra 10kb payload
  // runtimeCompiler: true
  productionSourceMap: false
}
