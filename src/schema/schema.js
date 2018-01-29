var { buildSchema } = require('graphql');
var queries = require('./query');
var types = require('./type');
var mutations = require('./mutation');

var schema = buildSchema(queries + types + mutations)

module.exports = schema;