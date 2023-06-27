const express = require('express')
const router = express.Router()

const userModel = require('../models/usersModel')
const userService = require('../services/userService')

const UserService = new userService(userModel)

router.post('/', async(req,res)=>{
    const body = req.body
    const user = await UserService.create(body)
    res.send(user)
})

module.exports = router