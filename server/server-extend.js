require('@babel/polyfill');
require('@babel/register')();

require('css-modules-require-hook')({
  extensions: ['.scss'],
  preprocessCss: (data, filename) =>
    require('node-sass').renderSync({
      data,
      file: filename,
    }).css,
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]',
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000,
});

const cmd = require('node-cmd');
const createHandler = require('github-webhook-handler');
const gql = require('./gql-response');
const type = require('./type.graphql');
const { secret } = require('../cert/git');

const handler = createHandler({ path: '/', secret });

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

  app.get('/q', gql(type));
};
