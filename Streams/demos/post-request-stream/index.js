const http = require('node:http');

const server = http.createServer(frontController);

function frontController(req, res) {
  if (req.method === 'POST') {
    let body = '';
    // 'data' is event for the on method and it is called many times as long as we keep on receiving data
    req.on('data', (data) => {
      body += data;
    });
    // 'end' is event for the on method and it is called once we received all the data
    req.on('end', () => {
      console.log(body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      // respond has to be ended here in the callback, because stream methods are asynchronous
      res.end(JSON.stringify({ message: 'Data received' }));
    });
    req.on('error', (err) => {
      console.error('Request error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
}

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));

server.on('error', (err) => {
  console.error('Server error:', err);
});
