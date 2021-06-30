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
        return sqlinstance.getUsers()
    }

    getUser(username, password) {
        var sqlinstance = new sql()
        return sqlinstance.getUser(username, password)
    }

    createUser(user) {
        var sqlinstance = new sql()
        return sqlinstance.createUser(user)
    }


    deleteUser(id) {
        var sqlinstance = new sql()
        return sqlinstance.deleteUser(id)
    }


    disableUser(id) {
        var sqlinstance = new sql()
        return sqlinstance.disableUser(id)
    }





}