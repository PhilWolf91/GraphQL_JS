var express = require('express');
var expressGQL = require('express-graphql');
var { buildSchema } = require('graphql');
var rootHandler = require('./handler/rootHandler');
var repository = require('./repository/AdventureWorksRepository');

var begin = () =>{

    /*  
        This is what is exposed to graphql endpoint
    */
    var schema = buildSchema(`
        type Query {
            hello: String
            testConnection: Boolean
            getAddressById(id: Int): String
        }
    `)
    
    /* 
        Root appears to be how the data is retrieved... so this could in turn 
        talk to an API or DB in some fashion using a repository of sorts.
    */
    // var root = { 
    //     hello: () => 'Hello World!, this is the first query exposed via GraphQL :D',
    //     testConnection: rootHandler.testConnection
    // };
    var root = rootHandler;

    var app = express();

    /* 
        Expose the graphql endpoint through express
        graphiql should only be enabled on NON-PRODUCTING environments 
    */
    app.use('/graphql', expressGQL({
        schema: schema,
        rootValue: root,
        graphiql: true
    }))

    /* 
        Start the Express server 
    */
    app.listen(4000, () => console.log("GraphQL is available at localhost:4000/graphql"))
}

var expressImplementation = {
    begin: begin
}

module.exports = expressImplementation;