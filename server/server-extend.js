const isSever = require('./is-server');
const cmd = require('node-cmd');
const createHandler = require('github-webhook-handler');
const { secret } = require('../cert/git');

const handler = createHandler({ path: '/', secret });

handler.on('error', function(err) {
  process.stderr.write(err);
});

handler.on('push', function(event) {
  if (event.payload) {
    const { ref, commits } = event.payload;

    if (ref === 'refs/heads/master') {
      if (commits.message === 'build: release') {
        process.stdout.write('git build-release event detected.\n');
        cmd.run('git clean -f');
        cmd.run('git pull');
      }
    }
  }
});

module.exports = function(app) {
  if (!isSever) {
    //
  }

  app.post('/', function(request, response) {
    // eslint-disable-next-line
    handler(request, response, function(err) {
      response.statusCode = 404;
      response.end('no such location');
    });
  });

  app.get('/q', require('./gql-response')(require('./type.graphql')));

  app.get('*', require('./ssr'));
};
