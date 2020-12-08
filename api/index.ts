const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const routeKeys = Object.keys(routes)
routeKeys.forEach(filename => app.use(routes[filename]))
module.exports = {
  path: '/api',
  handler: app
}
