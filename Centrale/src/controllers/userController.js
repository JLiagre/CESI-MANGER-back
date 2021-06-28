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

userController.login = async function (req, res) {
    let username = req.query.username
    let password = req.query.password

    if (!username || !password) {
        res.status(401).send()
    }
    console.log("IN TRY")

    var dbco = new databases();
    let user = await dbco.getUser(username, password);
    console.log("LE USER " + user)
    try {
        if (user && user.recordset[0]) {
            let accessToken = jwt.sign({username}, process.env.TOKEN_SECRET, {
                expiresIn: process.env.ACCESS_TOKEN_LIFE
            })
            let refreshToken = jwt.sign({username}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: process.env.REFRESH_TOKEN_LIFE
            })
            res.cookie("jwt", accessToken, {httpOnly: true})
            res.cookie("jwtRefresh", refreshToken, {httpOnly: true})
            return res.send('Utilisateur connecté !')
        } else {
            res.json({message: "Invalid Credentials"});
        }
    } catch (e) {
        console.log(e);
        return res.status(412).send();

    }
}

userController.createUser = async function (req, res) {
    var dbco = new databases();
    return await dbco.createUser(req.query);
}

module.exports = {
    userController,
}
