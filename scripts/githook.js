const spawn = (command, ...argv) => {
  const comanderStr = [command, ...argv].join(' ');
  process.stdout.write(`starting ${comanderStr}.\n`);

  const ls = require('child_process').spawn(command, [...argv]);

  ls.stdout.on('data', data => {
    process.stdout.write(data);
  });

  ls.stderr.on('data', data => {
    process.stdout.stderr(data);
  });

  ls.on('close', code => {
    process.stdout.write(`${comanderStr} finished with code '${code}'.\n`);
  });

  return ls;
};

module.exports = function(event) {
  if (event.payload) {
    const { ref } = event.payload;

    if (ref === 'refs/heads/master') {
      process.stdout.write('master changes detected.\n');
      spawn('gulp');
    }
  }
};


