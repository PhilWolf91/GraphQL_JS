var express = require('express');
var expressGQL = require('express-graphql');
var { buildSchema } = require('graphql');
var rootHandler = require('./handler/rootHandler');
var repository = require('./repository/AdventureWorksRepository');
var schema = require('./schema/schema');

//Many many ways to create repositories.
var repo = require('./repository/exampleRepository');
var repo2 = require('./repository/exampleRepository2');
var repo3 = require('./repository/exampleRepository3');

var a = repo;
var b = new repo2();
var c = new repo3('raleighEmergencyCC');
console.log(a.Test(), b.Test(), c.echoDatabase());

var begin = () =>{

    var root = rootHandler;
    var lgSchema = schema;
    var app = express();

    app.use('/graphql', expressGQL({
        schema: lgSchema,
        rootValue: root,
        graphiql: true
    }))

    app.listen(4000, () => console.log("GraphQL is available at localhost:4000/graphql"))

}

var expressImplementation = {
    begin: begin
}

module.exports = expressImplementation;