const express = require('express');
const router = express.Router();
const {userController} = require('../controllers/userController');
const tokenChecker = require('../services/tokenChecker');


router.post('/edit', tokenChecker, userController.edit);

module.exports = router