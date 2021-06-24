var sql = require('./sqlserver_connection');
var mongodb = require('./mongodb_connection');

module.exports = class databases {

    connect() {
        var sqlinstance = new sql()
        var mongoinstance = new mongodb()
        sqlinstance.testsql();
        mongoinstance.connecttomongo();
    }

    getUsers() {
        var sqlinstance = new sql()
        sqlinstance.getUsers()
    }

    getUser(username, password) {
        var sqlinstance = new sql()
        sqlinstance.getUser(username, password)
    }

}