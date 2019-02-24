const gql = require('../server/gql-response')
const type = require('../server/type.graphql');

export default {
  'GET /q': gql(type),
};
