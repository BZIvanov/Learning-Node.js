const http = require('node:http');

const server = http.createServer();

server.on('request', (request, response) => {
  console.log('--------- METHOD ---------');
  console.log(request.method);

  console.log('--------- URL ---------');
  console.log(request.url);

  console.log('--------- HEADERS ---------');
  console.log(request.headers);

  console.log('--------- BODY ---------');

  request.on('data', (chunk) => {
    console.log('REQUEST DATA: ', chunk.toString());
  });

  request.on('end', () => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify({
        message: 'Server response',
      })
    );
  });
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
