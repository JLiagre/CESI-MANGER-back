const express = require('express')
const usersRouter = require('./users')

const router = express.Router()

router.use('/users', usersRouter)
router.use('/auth', usersRouter)

module.exports = router