const path = require('path')
const SassVariables = require('sass-variables-webpack-plugin')
const { BannerPlugin } = require('webpack')

const plugins = [
  // bannner
  new BannerPlugin({
    banner: `${process.env.npm_package_name} v${process.env.npm_package_version}\n` +
      '(c) 2018 +v\n' +
      'Released under the MIT License.'
  }),
  // sass variables
  SassVariables(path.resolve(__dirname, './src/assets/scss/_variables.scss'))
]

if (process.env.npm_config_report) {
  // report
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = plugins
