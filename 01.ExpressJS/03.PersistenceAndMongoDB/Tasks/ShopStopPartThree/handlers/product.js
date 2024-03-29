const fs = require('fs');
const path = require('path');
const multiparty = require('multiparty');
const shortid = require('shortid');
const Product = require('../models/Product');
const Category = require('../models/Category');

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

      Category.find().then((categories) => {
        let replacement = '<select class="input-field" name="category">';
        for (const category of categories) {
          replacement += `<option value="${category._id}">${category.name}</option>`;
        }
        replacement += '</select>';

        const html = data.toString().replace('{categories}', replacement);

        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(html);
        res.end();
      });
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
      Product.create(product).then((insertedProduct) => {
        Category.findById(product.category).then((category) => {
          category.products.push(insertedProduct._id);
          category.save();
          res.writeHead(302, {
            Location: '/',
          });
          res.end();
        });
      });
    });

    form.parse(req);
  } else {
    return true;
  }
};
