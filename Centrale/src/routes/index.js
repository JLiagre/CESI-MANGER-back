const express = require('express')
const userRouter = require('./user')
const auth = require('./auth')
const appRouter = require('./appRouter')
const restaurant = require('./restaurant')
const router = express.Router()
const cors = require('cors');

router.use(cors());

router.use('/user', userRouter)
router.use('/auth', auth)
router.use('/app', appRouter)
router.use('/restaurant', restaurant)

module.exports = router