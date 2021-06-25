const User = require('../models/User')
const userController = {}
const jwt = require('jsonwebtoken');
var databases = require('../../databases/databases');

module.exports = class userController {

    async auth(json) {
        console.log(json)
        var db = new databases();
        user = await db.getUser('Test', 'test');
        console.log(user)
        return user
    }
    
}
