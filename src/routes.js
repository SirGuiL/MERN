const express = require('express')
const routes = express.Router()

const User = require('./controllers/userController')

routes.get('/', User.index)
routes.post('/api/users', User.create)

module.exports = routes
