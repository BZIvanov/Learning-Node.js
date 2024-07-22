const http = require('node:http');
const fs = require('node:fs');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  })
  .listen(3000, '127.0.0.1', () => console.log('Listening on port 3000...'));
