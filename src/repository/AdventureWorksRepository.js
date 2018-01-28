var knex = require('knex')({
    client: 'mssql',
    connection:{
        host     : 'vlktektesting.database.windows.net',
        user     : 'VlkTekAdmin',
        password : 'Br1ne@K0ng',
        database : 'AdventureWorksSample',
        options: {
            port: 1433,
            encrypt: true
        }
    }
})

var testConnection = () => {
    return new Promise( (resolve, reject) => {
        try{
            
            knex.select().table('SalesLT.Address')
                .then(
                    (success) =>{
                        console.log(success);
                        resolve(true);
                    }, 
                    (failure) =>{
                        console.log(failure);
                        resolve(false);
                    })

        }
        catch(err){
            console.log("Error with connection to database", JSON.stringify(err));
            resolve(false);
        }
    })
}

var getAddressById = (params) => {
    return new Promise( (resolve, reject) => {
        console.log(params.id);
        knex.select().where('AddressID', parseInt(params.id)).table('SalesLT.Address')
            .then( 
                (success) =>{
                    console.log(success)
                    resolve(success[0].AddressLine1);
                },
                (err) =>{
                    console.log(err);
                    resolve(null);
                });
    })
}

var AdventureWorksRepository = {
    testConnection: testConnection,
    getAddressById: getAddressById
}

module.exports = AdventureWorksRepository;