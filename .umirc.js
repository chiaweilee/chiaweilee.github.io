// ref: https://umijs.org/config/
export default {
  base: '/_/',
  publicPath: '/_/',
  cssPublicPath: '/_/',
  runtimePublicPath: true,
  outputPath: 'docs',
  hash: true,
  theme: './src/theme.js',
  history: 'browser',
  treeShaking: true,
  ignoreMomentLocale: true,
  alias: require('./webpack.config').resolve.alias,
  chainWebpack(config /* , { webpack } */) {
    if (process.env.NODE_ENV === 'production') {
      config.merge({
        optimization: {
          minimize: process.env.NODE_ENV === 'production',
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
      });
    }
  },
  plugins: [
    'umi-plugin-mdx',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
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
        title: 'app',
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
      },
    ],
    ['umi-plugin-pwa', {}],
  ],
};
