function kioskRepository3 (database) {
    this.database = database;
    this.echoDatabase = () =>{
        return this.database;
    }
};

module.exports = kioskRepository3;