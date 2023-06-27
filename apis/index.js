const express = require('express')
const router = express.Router()

const productsRouter = require('./productsapi')
const usersRouter = require('./usersapi')
const authRouter = require('./auth')
const authMiddleware = require('../middlewares/authorization')
const registerRouter = require('./register')

router.use('/products',productsRouter)

router.use('/auth', authRouter)
router.use('/register', registerRouter)

router.use(authMiddleware)
router.use('/users', usersRouter)


module.exports = router