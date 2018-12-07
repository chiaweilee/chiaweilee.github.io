// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Dear.red'
    }
  },
  configureWebpack: {
    plugins: require('./vue.config.plugins')
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('js')
      .test(/\.js?$/)
      .use('remove-flow-types-loader')
      .loader('remove-flow-types-loader')
  },
  // to use the template option in Vue components, extra 10kb payload
  // runtimeCompiler: true
  productionSourceMap: false
}
