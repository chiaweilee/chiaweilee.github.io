const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const BannerJSPlugin = require('banner-js-webpack-plugin')
const SassVariablesPlugin = require('sass-variables-webpack-plugin')

const plugins = [
  // banner-js
  new BannerJSPlugin(require('./src/banner')),
  // banner
  new webpack.BannerPlugin({
    entryOnly: true,
    banner: `${process.env.npm_package_name} v${process.env.npm_package_version}\n` +
      '(c) 2018 +v\n' +
      'Released under the MIT License.'
  }),
  // sass variables
  new SassVariablesPlugin('src/assets/scss/_variables.scss')
]

if (process.env.npm_config_report) {
  // report
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = plugins
