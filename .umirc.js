const chainWebpack = require('./chainWebpack');
const pwa = require('./pwa');

export default {
  hash: true,
  treeShaking: true,
  ignoreMomentLocale: true,
  chainWebpack,
  alias: {
    '@': 'src'
  },
  copy: [
    {
      from: 'src/assets',
      to: 'static'
    }
  ],
  extraBabelPlugins: ['transform-react-jsx-filter'],
  plugins: [
    // TODO https://github.com/umijs/umi/issues/1330
    // [
    //   'umi-plugin-ssr'
    // ],
    [
      'umi-plugin-react',
      {
        pwa,
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
