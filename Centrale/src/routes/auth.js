const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../models/User');
const express = require('express');
const router = express.Router();
const tokenChecker = require('../services/tokenChecker');
const authValidator = require('../services/auth-validators');
const {userController} = require('../controllers/userController');


router.post('/', userController.findOne);
router.post('/signup', authValidator.signup, userController.createUser);


module.exports = router