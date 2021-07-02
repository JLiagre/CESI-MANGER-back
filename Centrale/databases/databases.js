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

    createUserSharp(user) {
        var sqlinstance = new sql()
        return sqlinstance.createUserSharp(user)
    }

    deleteUser(id) {
        var sqlinstance = new sql()
        return sqlinstance.deleteUser(id)
    }

    editUser(id, req){
        console.log("INSIDE DB")
        var sqlinstance = new sql()
        return sqlinstance.editUser(id, req)
    }
    
    disableUser(id) {
        var sqlinstance = new sql()
        return sqlinstance.disableUser(id)
    }

    createRestaurant(restaurant){
        var mongoinstance = new mongodb()
        return mongoinstance.createRestaurant(restaurant)
    }

    getRestaurants(id){
        var mongoinstance = new mongodb()
        return mongoinstance.getRestaurants(id)
    }

    deleteRestaurant(id){
        var mongoinstance = new mongodb()
        mongoinstance.deleteRestaurant(id)
    }

    editRestaurant(id){
        var mongoinstance = new mongodb()
        return mongoinstance.editRestaurant(id)
    }
    
    createMenu(id, menu){
        var mongoinstance = new mongodb()
        return mongoinstance.createMenu(id, menu)
    }


}