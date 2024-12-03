const express = require('express')
const Router = express.Router()
const {addUser,updateUser} = require('../controller/userController')

Router.post('/user/add-user',addUser)
Router.post('/user/update-user',updateUser)

module.exports = Router