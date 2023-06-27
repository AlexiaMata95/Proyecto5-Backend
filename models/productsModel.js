const mongoose = require('mongoose')
const { Schema, model } = mongoose

const productsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    image: {
        type:String
    }
},{
    versionKey:false,
    timestamps:true
    })

    const productModel = model('products', productsSchema)

    module.exports = productModel;

