const express = require('express')
const Router = express.Router()
const {addCustomer} = require('../controller/userController')

Router.post('/user/add-customer',addCustomer)

module.exports = Router