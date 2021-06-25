const express = require('express')
const usersRouter = require('./users')
const auth = require('./auth')
const router = express.Router()

router.use('/users', usersRouter)
router.use('/auth', auth)

// router.use('/auth', ssusersRouter)

module.exports = router