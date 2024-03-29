const fs = require('fs');
const path = require('path');
const multiparty = require('multiparty');
const shortid = require('shortid');
const database = require('../config/database');

module.exports = (req, res) => {
  const baseURL = 'http://' + req.headers.host + '/';
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname === '/product/add' && req.method === 'GET') {
    const filePath = path.normalize(
      path.join(__dirname, '..', 'views', 'products', 'add.html')
    );

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
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
  } else if (req.pathname === '/product/add' && req.method === 'POST') {
    const form = new multiparty.Form();
    const product = {};

    form.on('part', (part) => {
      if (part.filename) {
        let dataString = '';

        part.setEncoding('binary');
        part.on('data', (data) => {
          dataString += data;
        });

        part.on('end', () => {
          const fileName = shortid.generate();
          const filePath = path.normalize(
            path.join(__dirname, '..', 'content', 'images', `${fileName}.jpeg`)
          );
          product.image = `content/images/${fileName}.jpeg`;

          fs.writeFile(filePath, dataString, { encoding: 'ascii' }, (err) => {
            if (err) {
              console.log(err);
              return;
            }
          });
        });
      } else {
        part.setEncoding('utf-8');
        let field = '';
        part.on('data', (data) => {
          field += data;
        });

        part.on('end', () => {
          product[part.name] = field;
        });
      }
    });

    form.on('close', () => {
      database.products.add(product);
      res.writeHead(302, {
        Location: '/',
      });

      res.end();
    });

    form.parse(req);
  } else {
    return true;
  }
};
