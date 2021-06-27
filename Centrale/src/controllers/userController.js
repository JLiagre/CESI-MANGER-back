const User = require('../models/User')
const jwt = require('jsonwebtoken');
var databases = require('../../databases/databases');

const userController = {}

userController.auth = async function (json) {
    console.log(json)
    var db = new databases();
    user = db.getUser('Test', 'test');
    console.log(user)
    return user
}

userController.findOne = async function (req,res) {
    let username = req.query.username
    let password = req.query.password

    if (!username || !password) {
         res.status(401).send()
    }
    console.log("IN TRY")

    var dbco = new databases();
    let user = await dbco.getUser(username, password);
    console.log("LE USER ")
    console.log(user)
    try {
        if (user.recordset[0]) {
            console.log("IN TRYIIIII")
            res.cookie("jwt", accessToken, {httpOnly: true})
            res.cookie("jwtRefresh", refreshToken, {httpOnly: true})
             res.send('T')
        } else {
             json({message: "Invalid Credentials"});
        }
    } catch (e) {
          res.status(412).send();
        console.log(e)
    }
}


userController.createUser = async function (req, res) {
    var dbco = new connection();
    return await dbco.createUser(req);
}

module.exports = {
    userController,
}
