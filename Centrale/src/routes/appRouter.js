const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const express = require('express');
const router = express.Router();
const tokenChecker = require('../services/tokenChecker');

router.get('/', tokenChecker, (req, res) => {
        console.log ("C'est bon !!!!")
    }
);

module.exports = router