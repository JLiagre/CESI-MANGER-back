const express = require('express')
const usersRouter = require('./users')
const auth = require('./auth')
const appRouter = require('./appRouter')
const router = express.Router()

router.use('/users', usersRouter)
router.use('/auth', auth)
router.use('/app', appRouter)

module.exports = router