const url = require('url');
const database = require('../config/database');
const fs = require('fs');
const path = require('path');
// querystring module will collect data from stream. For example from form submition we will get object where the properties will be from the input name attribute
const qs = require('querystring');

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname;

  if (req.pathname === '/product/add' && req.method === 'GET') {
    const filePath = path.normalize(
      path.join(__dirname, '../views/products/add.html')
    );

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
      }

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  } else if (req.pathname === '/product/add' && req.method === 'POST') {
    let dataString = '';

    req.on('data', (data) => {
      dataString += data;
    });

    req.on('end', () => {
      const product = qs.parse(dataString);
      database.products.add(product);

      res.writeHead(302, {
        Location: '/',
      });
      res.end();
    });
  } else {
    return true;
  }
};
