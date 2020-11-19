const express = require('express')

const routes = express.Router()
const SearchController = require('./controllers/searchController')

routes.get('/', SearchController.index)



module.exports = routes