const resolve = require('path').resolve
const title = require('./src/config/title')
const SassVariables = require('sass-variables-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const argv = process.argv.slice(3)

const plugins = [
  SassVariables(resolve(__dirname, './src/assets/scss/_variables.scss'))
]

if (process.env.NODE_ENV === 'production' && argv.indexOf('--report') > -1) {
  plugins.push(new BundleAnalyzerPlugin())
}

// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: title
    }
  },
  configureWebpack: {
    plugins: plugins
  },
  // to use the template option in Vue components, extra 10kb payload
  // runtimeCompiler: true
  productionSourceMap: false
}
