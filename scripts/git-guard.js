const cmd = require('node-cmd');
const createHandler = require('github-webhook-handler');

const handler = createHandler({ path: '/', secret: '7d38cdd689735b008b3c702edd92eea23791c5f6' });

handler.on('error', function(err) {
  process.stderr.write(err);
});

handler.on('push', function() {
  process.stdout.write('git push event detected.\n');
  cmd.run('git clean -f');
  cmd.run('git pull');
});

module.exports = function(app) {
  app.post('/', function(request, response) {
    // eslint-disable-next-line
    handler(request, response, function(err) {
      response.statusCode = 404;
      response.end('no such location');
    });
  });
};
