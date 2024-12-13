const express = require('express')
const Router = express.Router()
const {addItem,getItemById,deleteItemById} =  require('../controller/cartController')
Router.post('/cart/add-item',addItem)
Router.get('/cart/get-all',getItemById)
Router.delete('/cart/delete-one',deleteItemById)

module.exports = Router