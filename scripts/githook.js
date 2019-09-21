const run = function(pwd) {
  require('node-cmd').get(pwd, function(err, data) {
    if (err) {
      process.stderr.write(data);
      return;
    }
    process.stdout.write(data);
  });
};

module.exports = function(event) {
  if (event.payload) {
    const { ref, commits } = event.payload;

    if (ref === 'refs/heads/master') {
      process.stdout.write('master changes detected.\n');
      run('git fetch --all');
      run('git reset --hard origin/master');
      run('git pull');
      run('cnpm i && npm run build');
    }
  }
};
