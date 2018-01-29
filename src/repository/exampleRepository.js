var knex = null;

var createConnection = (database) => {
    knex = require('knex')({
        client: 'mssql',
        connection:{
            host     : '',
            user     : '',
            password : '',
            database : database,
            options: {
                port: 1433,
                encrypt: true
            }
        }
    })
}

var KioskRepository = {
    Test: () => { return 1 },
    Test2: () => { return 2 },
    CreateConnection: createConnection
}



module.exports = KioskRepository;