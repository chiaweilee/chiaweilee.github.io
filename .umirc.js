const { resolve } = require('./webpack.config');

export default {
  hash: true,
  history: 'hash',
  treeShaking: true,
  ignoreMomentLocale: true,
  chainWebpack: function(config /* , { webpack } */) {
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
        analyzer: process.argv.indexOf('build') ? {
          plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
          args: [],
        } : {},
        'banner-js': {
          plugin: require('banner-js-webpack-plugin'),
          args: [require('./src/banner')],
        },
      },
    });
  },
  alias: resolve.alias,
  copy: [
    {
      from: 'src/assets',
      to: 'static',
    },
  ],
  extraBabelPlugins: ['transform-react-jsx-filter'],
  plugins: [
    [
      'umi-plugin-react',
      {
        chunks: ['vendors', 'umi'], // #1086
        pwa: {
          manifestOptions: {
            srcPath: 'src/manifest.json',
          },
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
            swSrc: 'src/sw.js',
            swDest: 'sw.js',
          },
        },
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'dear.red',
        dll: true,
        fastClick: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
