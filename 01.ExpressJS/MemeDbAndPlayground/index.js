const http = require('http')
const url = require('url')
const qs = require('querystring')
const port = process.env.PORT || 5000
const handlers = require('./handlers/handlerBlender')

// this require is not stored in variable, but we can still get use of it, because the code inside will be applied. Here we will load the database because we need it before working with the server
require('./config/db').then(() => {
  console.log('Database ready!')

  http.createServer((req, res) => {
      req.pathname = url.parse(req.url).pathname
      req.pathquery = qs.parse(url.parse(req.url).query)
      for (let handler of handlers) {
        if (!handler(req, res)) {
          break
        }
      }
    }).listen(port)
}).catch((err) => {
  // here we will throw the error not just print it because if we fail to load database we want everything to stop
  throw err;
});


