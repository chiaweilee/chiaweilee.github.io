const { task, series } = require('gulp');
const exec = require('child_process').exec;

const fetch = 'fetch';
const reset = 'reset';
const pull = 'pull';
const build = 'build';

const createTask = (name, cmd) =>
  task(name, function(cb) {
    exec(cmd, err => {
      cb(err);
    });
  });

createTask(fetch, 'git fetch --all');
createTask(reset, 'git reset --hard origin/master');
createTask(pull, 'git pull');
createTask(build, 'umi build');

exports.default = series(fetch, reset, pull, build);
