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
const {restaurantController} = require('../controllers/restaurantController');

router.post('/create', tokenChecker, restaurantController.createRestaurant);
router.get('/', tokenChecker, restaurantController.getRestaurants);
router.get('/delete', tokenChecker, restaurantController.deleteRestaurant);
router.get('/edit', tokenChecker, restaurantController.editRestaurant);
router.post('/menuCreate', tokenChecker, restaurantController.menuCreate);
router.get('/all', tokenChecker, restaurantController.getAll);
module.exports = router