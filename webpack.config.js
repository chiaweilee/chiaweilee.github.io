const { resolve } = require('path');

module.exports = {
  // #IDE, declaration to go to
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
};
