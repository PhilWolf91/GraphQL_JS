var { graphql, buildSchema } = require('graphql');

var begin = () => {
    var schema = buildSchema(`
        type Query {
            hello: String
        }
    `)

    var root = { hello: () => 'Hello World!' };

    graphql(schema, '{ hello }', root).then((response) => {
        console.log(response);
    })
}

var nodeImplementation = {
    begin: begin
}

module.exports = nodeImplementation;