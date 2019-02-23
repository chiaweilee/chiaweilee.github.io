const gql = require('../scripts/gql-response')
const type = require('../scripts/type.graphql');

export default {
  'GET /q': gql(type),
};
