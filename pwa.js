module.exports = {
  manifestOptions: {
    srcPath: 'src/manifest.json',
  },
  workboxPluginMode: 'InjectManifest',
  workboxOptions: {
    importWorkboxFrom: 'local',
    swSrc: 'src/sw.js',
    swDest: 'sw.js',
  },
};
