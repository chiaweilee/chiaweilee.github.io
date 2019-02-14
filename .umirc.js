const chainWebpack = require('./chainWebpack');
const pwa = require('./pwa');

export default {
  hash: true,
  treeShaking: true,
  chainWebpack,
  plugins: [
    [
      'umi-plugin-react',
      {
        pwa,
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'dear.red',
        dll: true,
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
