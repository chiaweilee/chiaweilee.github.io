const analyzer = !require('./scripts/is-build')
  ? {}
  : {
      plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      args: [],
    };

module.exports = function(config /* , { webpack } */) {
  config.plugins.delete('progress');

  config.merge({
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        minChunks: 1,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test({ resource }) {
              return /[\\/]node_modules[\\/]/.test(resource);
            },
            priority: 99,
          },
        },
      },
    },
    plugin: {
      analyzer: { ...analyzer },
      'banner-js': {
        plugin: require('banner-js-webpack-plugin'),
        args: [require('./src/banner')],
      },
    },
  });
};
