
module.exports = function (config, { webpack }) {
  config.merge({
    plugin: {
      'banner-js': {
        plugin: require('banner-js-webpack-plugin'),
        args: [
          require('./scripts/banner')
        ]
      },
      'banner': {
        plugin: webpack.BannerPlugin,
        args: [
          {
            entryOnly: true,
            banner: `${process.env.npm_package_name} v${process.env.npm_package_version}\n` +
                '(c) 2019 +v\n' +
                'Released under the MIT License.'
          }
        ]
      }
    }
  });
}
