const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const express = require('express');
const router = express.Router();
const tokenChecker = require('../services/tokenChecker');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'yourSecret'
};


router.post('/auth', async (req, res) => {

    let username = req.query.username
    let password = req.query.password

    if (!username || !password) {
        return res.status(401).send()
    }

    let user = await User.findOne(req.query.username, req.query.password);
    // console.log("User = " + user.recordset);
    // console.log("User avec 0!!  = " + user.recordset[0]);
    try {
        let accessToken = jwt.sign({name: username}, process.env.TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_LIFE,
            })
        let refreshToken = jwt.sign({name: username}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_LIFE,
        })
        if (user.recordset[0]) {
            res.cookie("jwt", accessToken, {httpOnly: true})
            res.cookie("jwtRefresh", refreshToken, {httpOnly: true})
            res.send()
        } else {
            res.json({message: "Invalid Credentials"});
        }
    } catch (e) {
        console.log(e)
    }
});


router.get('/', async (req, res) => {
        console.log(req.cookies)
        tokenChecker(req, res, null)
    }
);
module.exports = router