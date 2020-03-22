const exec = require('child_process').exec;

module.exports = function(event) {
  if (event.payload) {
    const { ref } = event.payload;

    if (ref === 'refs/heads/master') {
      process.stdout.write('master changes detected.\n');
      exec('gulp');
    }
  }
};
