const cmd = require('node-cmd');

module.exports = function(event) {
  if (event.payload) {
    const { ref, commits } = event.payload;

    if (ref === 'refs/heads/master') {
      if (!commits.every(commit => commit.message !== 'build: release')) {
        process.stdout.write('git build-release event detected.\n');
        cmd.run('git clean -f');
        cmd.run('git pull');
      }
    }
  }
};
