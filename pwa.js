module.exports = {
  manifestOptions: {
    srcPath: 'src/manifest.json',
  },
  workboxPluginMode: 'InjectManifest',
  workboxOptions: {
    importWorkboxFrom: 'local',
    swSrc: 'src/service-worker.js',
    swDest: 'sw.js',
  },
};
