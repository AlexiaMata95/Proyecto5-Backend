const productModel = require('../models/productsModel');

const getProducts = async() => {
    const products = await productModel.find({})
    return products
}

const getProductById = async(_id) => {
    return productModel.findById(_id)
}

const createProduct = async(product) => {
    const newProduct = new productModel(product)
    return newProduct.save()
}

const updateProduct = async( _id, product ) => {
    return productModel.findOneAndUpdate({_id}, product, {
        upsert:false,
        new:true
    })
}

const deleteProduct = async(_id) => {
    return productModel.findOneAndDelete(_id)
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

