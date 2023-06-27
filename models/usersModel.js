const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcrypt = require('bcrypt')

const usersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    email: {
        type:String
    },
    password: {
        type:String
    }
},{
    versionKey:false,
    timestamps:true
    })

    usersSchema.pre('save', function(next){
        console.log('------>', this.email, this.password)
        const hashedPassword = bcrypt.hashSync(this.password, 12)
        this.password = hashedPassword
        next()
    })

    const userModel = model('users', usersSchema)

    module.exports = userModel;