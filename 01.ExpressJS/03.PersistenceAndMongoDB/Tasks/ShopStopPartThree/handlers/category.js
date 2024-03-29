const fs = require('fs');
const Category = require('../models/Category');

/**
 *
 * @param {HTTP.ClientRequest} req
 * @param {HTTP.ClientResponse} res
 */
module.exports = (req, res) => {
  const baseURL = 'http://' + req.headers.host + '/';
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname === '/category/add' && req.method === 'GET') {
    fs.readFile('./views/category/add.html', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });
        res.write('404 not found!');
        res.end();
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  } else if (req.pathname === '/category/add' && req.method === 'POST') {
    let categoryData = '';
    req.on('data', (data) => {
      categoryData += data;
    });

    req.on('end', () => {
      const categoryName = new URLSearchParams(categoryData).get('name');

      Category.create({ name: categoryName })
        .then(() => {
          res.writeHead(302, {
            Location: '/',
          });
          res.end();
        })
        .catch((err) => {
          console.log(err);
          res.end();
        });
    });
  } else {
    return true;
  }
};
