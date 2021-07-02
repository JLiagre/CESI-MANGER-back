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
    console.log(req)
    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
        res.status(401).send()
    }
    console.log("IN TRY")

    var dbco = new databases();
    let user = await dbco.getUser(username, password);
    console.log("LE USER " + user.recordset[0])
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
            return res.send(user).json()
        } else {
            res.status(401).send({error: "Invalid credentials !"});
        }
    } catch (e) {
        console.log(e);
        return res.status(412).send();

    }
}

userController.createUser = async function (req, res) {
    console.log(req);
    var dbco = new databases();
    try {
        await dbco.createUser(req.body);
        return res.status(200).send()
    } catch (e) {
        return res.status(412).send();

    }
}

userController.createUserSharp = async  function(req,res){
    req.body.userRole=="client"
    if(req.body.securite !== null) {
        console.log(req);
        var dbco = new databases();
        try {
           const list = await dbco.createUserSharp(req.body);
            return res.status(200).send()
        } catch (e) {
            return res.status(412).send();

        }
    }else{
        return  res.status(412).send();
    }


}
userController.deleteUser = async function (req, res, next) {
    var dbco = new databases();
    var id = req.query.id;
    if (!id) {
        console.log("No id given");
        return res.status(403).send();
    }
    try {
        await dbco.deleteUser(id);
        return res.status(200).send();
    } catch (e) {
        return res.status(412).send();
    }

}


userController.disableUser = async function (req, res, next) {
    var dbco = new databases();
    var id = req.query.id;
    console.log(id);
    if (!id) {
        console.log("No id given");
        return res.status(403).send();
    }
    try {
        await dbco.disableUser(id);
        return res.status(200).send();
    } catch (e) {
        return res.status(412).send();
    }

}


userController.edit = async function (req, res, next) {
    var dbco = new databases();
    console.log(req.body)
    console.log()
    console.log("CONTROLLER")
    var id = req.body.id;
    console.log(id);
    if (!id) {
        console.log("No id given");
        return res.status(403).send();
    }
    try {
        const i = await dbco.editUser(id, req.body.data);
        console.log(i);
        return res.status(200).send(i);
    } catch (e) {
        return res.status(412).send();
    }

}
module.exports = {
    userController,
}
