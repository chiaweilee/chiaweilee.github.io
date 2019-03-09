module.exports = function(config /* , { webpack } */) {
  config.merge({
    plugin: {
      analyzer: {
        plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
        args: [],
      },
      'banner-js': {
        plugin: require('banner-js-webpack-plugin'),
        args: [require('./src/banner')],
      },
    },
  });
};
