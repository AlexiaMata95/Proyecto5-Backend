const express =  require('express')
const router = express.Router()

const userModel = require('../models/usersModel')
const userService =  require('../services/userService')

const UserService = new userService(userModel)

router.get('/me', async(req, res) =>{
    const sessionUser = req.user
    
    if(!sessionUser){
        return res.send({
            message : 'Tu no deberías estar aquí'
        })
    }

    res.send({
        name: sessionUser.name,
        email:sessionUser.email
    })
})

router.post('/', async(req,res) =>{
    const body = req.body
    const user = await UserService.create(body)
    res.send(user)
})

module.exports = router