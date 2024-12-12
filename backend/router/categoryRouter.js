const express = require('express')
const Router = express.Router()
const addCategory =  require('../controller/categoryController')
Router.post('/category/add-category',addCategory)

module.exports = Router