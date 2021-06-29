const express = require('express')
const usersRouter = require('./users')
const auth = require('./auth')
const appRouter = require('./appRouter')
const router = express.Router()
const cors = require('cors');
router.use(cors());
router.use('/users', usersRouter)
router.use('/auth', auth)
router.use('/app', appRouter)

module.exports = router