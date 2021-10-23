const fs = require('fs');
const path = require('path');
const database = require('../config/database');

module.exports = (req, res) => {
  const baseURL = 'http://' + req.headers.host + '/';
  // we will add pathname property to the req object
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname === '/' && req.method === 'GET') {
    // normalize method removes dots from the path and double slashes etc.
    // __dirname is a global variable which is the path to the module. Console.log it anywhere to see example
    const filePath = path.normalize(
      path.join(__dirname, '..', 'views', 'home', 'index.html')
    );

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404, {
          // content type for internet search use mime types
          'Content-Type': 'text/plain',
        });

        res.write('404 not found');
        res.end();
        return;
      }

      const queryData = new URL(req.url, baseURL).searchParams.get('query');

      let products = database.products.getAll();
      if (queryData) {
        products = products.filter((product) => {
          return product.name.toLowerCase().includes(queryData.toLowerCase());
        });
      }

      let content = '';
      for (const product of products) {
        content += `<div class="product-card">
                    <img class="product-img" src="${product.image}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>`;
      }

      const html = data.toString().replace('{content}', content);

      res.writeHead(200, {
        'Content-Type': 'text/html',
      });

      res.write(html);
      res.end();
    });
  } else {
    return true;
  }
};
