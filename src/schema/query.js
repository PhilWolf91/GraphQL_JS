var queries =  `
    type Query {
        hello: String
        testConnection: Boolean
        getAddressById(id: Int): String
    }
`

module.exports = queries;