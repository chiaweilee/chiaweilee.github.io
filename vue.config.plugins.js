const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const BannerJSPlugin = require('banner-js-webpack-plugin')

const plugins = [
  new BannerJSPlugin(function () {
    // run before webpack entry
  }),
  // banner
  new webpack.BannerPlugin({
    entryOnly: true,
    banner: `${process.env.npm_package_name} v${process.env.npm_package_version}\n` +
      '(c) 2018 +v\n' +
      'Released under the MIT License.'
  }),
  // sass variables
  require('sass-variables-webpack-plugin')('src/assets/scss/_variables.scss')
]

if (process.env.npm_config_report) {
  // report
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = plugins
