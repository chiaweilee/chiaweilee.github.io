const { task, series } = require('gulp');
const exec = require('child_process').exec;

const fetch = 'fetch';
const reset = 'reset';
const pull = 'pull';

const createTask = (name, cmd) =>
  task(name, function(cb) {
    exec(cmd, err => {
      cb(err);
    });
  });

createTask(fetch, 'git fetch --all');
createTask(reset, 'git reset --hard origin/master');
createTask(pull, 'git pull');

exports.default = series(fetch, reset, pull);
