const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(frontController);

function frontController(req, res) {
  const baseURL = 'http://' + req.headers.host + '/';
  const path = new URL(req.url, baseURL).pathname;

  // if the path is / or /index.html then we return our html file otherwise return the error file. Only one backslash means nothing after the port in the url or just the backslash, any other symbol or text will be incorrect path
  if (path === '/' || path === '/index.html') {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      res.writeHead(200, {
        // content type for internet search use mime types
        'content-type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  } else if (path === '/about.html') {
    // similarly to index.html we can get about.html page by checking the path
    fs.readFile('./about.html', 'utf-8', (err, data) => {
      res.writeHead(200, {
        'content-type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  } else if (path === '/site.css') {
    // here this time we get css file not html
    fs.readFile('./site.css', 'utf-8', (err, data) => {
      res.writeHead(200, {
        // for css we use txt/css
        'content-type': 'text/css',
      });
      res.write(data);
      res.end();
    });
  } else if (path === '/get-message.js') {
    // here this time we get js file
    fs.readFile('./get-message.js', 'utf-8', (err, data) => {
      res.writeHead(200, {
        'content-type': 'application/javascript',
      });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('./error.html', 'utf-8', (err, data) => {
      res.writeHead(404, {
        'content-type': 'text/html',
      });
      res.write(data);
      res.end();
    });
  }
}

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
