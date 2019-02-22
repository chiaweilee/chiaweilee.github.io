module.exports = function(config /* , { webpack } */) {
  config.merge({
    plugin: {
      'banner-js': {
        plugin: require('banner-js-webpack-plugin'),
        args: [require('./src/banner')],
      },
    },
  });
};
