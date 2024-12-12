const express = require('express')
const Router = express.Router()
// const addCategory =  require('../controller/categoryController')
const {addProduct,getPrById,getAllPr,getAllFashionPr,getAllElectronicsPr,getAllBooksPr,getAllComputersPr,getAllGamingsPr,getAllGroceryPr,getAllHealthPr,getAllSportsPr,SearchItem} = require('../controller/productController')

Router.post('/product/add-product',addProduct)
Router.get('/product/get-pr',getPrById)
Router.get('/product/get-all',getAllPr)
Router.get('/product/get-all-fashion',getAllFashionPr)
Router.get('/product/get-all-electronics',getAllElectronicsPr)
Router.get('/product/get-all-books',getAllBooksPr)
Router.get('/product/get-all-computers',getAllComputersPr)
Router.get('/product/get-all-gaming',getAllGamingsPr)
Router.get('/product/get-all-grocery',getAllGroceryPr)
Router.get('/product/get-all-health',getAllHealthPr)
Router.get('/product/get-all-sports',getAllSportsPr)
Router.get('/product/search',SearchItem)

module.exports = Router