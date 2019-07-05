// ref: https://umijs.org/config/
export default {
  hash: true,
  history: 'browser',
  treeShaking: true,
  ignoreMomentLocale: true,
  alias: require('./webpack.config').resolve.alias,
  chainWebpack(config /* , { webpack } */) {
    config.plugins.delete('progress');

    const extend =
      process.env.NODE_ENV !== 'production'
        ? {}
        : {
          analyzer: {
            plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
            args: [],
          },
        };

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
        ...extend,
      },
    });
  },
  plugins: [
    'umi-plugin-md',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
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
      title: 'test',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
};
