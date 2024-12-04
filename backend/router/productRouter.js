const express = require('express')
const Router = express.Router()
// const addCategory =  require('../controller/categoryController')
const {addProduct,getPrById} = require('../controller/productController')

Router.post('/product/add-product',addProduct)
Router.get('/product/get-pr',getPrById)

module.exports = Router