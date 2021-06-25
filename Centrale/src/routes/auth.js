const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const express = require('express');
const router = express.Router()
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'yourSecret'
};


router.post('/auth', async (req, res) => {
    const user = await User.findOne({ user: req.query.username, password: req.query.password });
    try{
        const accessToken = jwt.sign(JSON.stringify(req.query.username), process.env.TOKEN_SECRET)
        if(match){
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch(e) {
        console.log(e)
    }
});

module.exports = router