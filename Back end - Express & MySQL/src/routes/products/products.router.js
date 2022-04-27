const express = require('express')

const productsRouter = express.Router()

const { httpGetAllProducts,
        httpGetProductsByCategoryId,       
        httpGetProductsByName,
        httpGetProductBySku } 
        = require('./products.controller')

productsRouter.get('/', httpGetAllProducts)        

productsRouter.get('/getByCategoryId', httpGetProductsByCategoryId)

productsRouter.get('/getByName', httpGetProductsByName)

productsRouter.get('/:sku', httpGetProductBySku)

module.exports = productsRouter