const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

const userService = require('../services/userService')
const userModel = require('../models/usersModel')
const authService = require('../services/auth')

require('dotenv').config()

const UserService = new userService(userModel)
const AuthService = new authService(UserService)
const JWT_SECRET = process.env.JWT_SECRET_PS

router.post('/login', async(req, res) =>{
    const { email, password } = req.body
    
    try{
        const user = await AuthService.login(email,password)
        
        const userRole = {
            ...user,
            role: 'admin',
            permissions: ['users:me']
        }

        const token = jwt.sign({
            data: userRole,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        },JWT_SECRET)


        res.send({
            _id: user._id,
            token
        })
    }catch (error) {
        console.error(error)
    }
})

module.exports = router