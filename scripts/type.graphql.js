const { buildSchema } = require('graphql');

module.exports = {
  schema: buildSchema(`
      type Query {
        t: String
      }
    `),
  root: {
    t: () => new Date().valueOf(),
  },
};
