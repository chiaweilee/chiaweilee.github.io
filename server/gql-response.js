const { graphql } = require('graphql');

module.exports = ({ schema, root }) => ({ url }, res) => {
  graphql(schema, url.split('?')[1], root).then(result => {
    res.send(result);
  });
};
