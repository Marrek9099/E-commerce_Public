const express = require('express')

const {httpGetProductCategories} = require('./productCategories.controller')

const productCategoriesRouter = express.Router()


productCategoriesRouter.get('/', httpGetProductCategories)


module.exports = productCategoriesRouter