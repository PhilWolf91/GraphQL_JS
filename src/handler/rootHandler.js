var repository = require('../repository/AdventureWorksRepository');

var hello = () => {
    return "Hello GraphQL";
}

var testConnection = () => {
    return repository.testConnection().then( (result) => {
        console.log(result);
        return result;
    })
}

var getAddressById = (id) => {
    return repository.getAddressById(id).then( (result) => {
        console.log(result);
        return result;
    })
}

var handler = {
    hello: hello,
    testConnection: testConnection,
    getAddressById: getAddressById
}

module.exports = handler;