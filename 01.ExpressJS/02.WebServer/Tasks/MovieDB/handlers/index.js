const homeHandler = require('./homeHandler')
const errorHandler = require('./errorHandler')
const staticHandler = require('./staticHandler')
const moviesHandler = require('./movieHandler')

module.exports = [
  homeHandler,
  moviesHandler,
  staticHandler,
  errorHandler
]
