const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const { productController } = require('../controllers');

const { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } = productController

 router.get('/', async( req, res ) => {
    const products = await getProducts()
    res.send(products)
 })

 router.get('/:id', async( req, res ) => {
    const products = await getProductById(req.params.id);
    res.send(products)
 })

 router.post('/', async( req, res ) => {
    const body = req.body
    try{
        const newProduct = await createProduct(body)
        res.send(newProduct)
    } catch(error){
        console.error(error)
    }
 })

 router.put('/:id', async( req, res ) =>{
    const body = req.body;
    const {id} = req.params;
    const product = await updateProduct(id, body);

    if(!product){
        return res.send({
            message: "Producto no encontrado"
        })
    }
    res.send(product)
 })

 router.delete('/:id', async( req, res ) => {
    const {id} = req.params;
    const result=await deleteProduct(id);
    res.send(result)
 })

 module.exports = router