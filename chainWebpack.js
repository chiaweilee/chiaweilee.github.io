const isBuild = require('./scripts/is-build');

const plugin = {
  'banner-js': {
    plugin: require('banner-js-webpack-plugin'),
    args: [require('./src/banner')],
  },
};

if (isBuild) {
  plugin.analyzer = {
    plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    args: [],
  };
}

module.exports = function(config /* , { webpack } */) {
  config.merge({
    plugin,
  });
};
