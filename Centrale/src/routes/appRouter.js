const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const express = require('express');
const router = express.Router();
const tokenChecker = require('../services/tokenChecker');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'yourSecret'
};


router.get('/', async (req, res) => {
        await tokenChecker(req, res, null)
        return ("C'est bon !!!!")
    }
);

module.exports = router