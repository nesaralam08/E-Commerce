const express = require('express')
const Router = express.Router()
const {addUser,updateUser,getUserById} = require('../controller/userController')

Router.post('/user/add-user',addUser)
Router.post('/user/update-user',updateUser)
Router.get('/user/get-user',getUserById)
module.exports = Router