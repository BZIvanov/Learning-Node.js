const http = require('node:http');

const agent = new http.Agent({ keepAlive: true });

const request = http.request({
  agent: agent,
  hostname: 'localhost',
  port: 3000,
  method: 'POST',
  path: '/create-post',
  headers: {
    'Content-Type': 'application/json',
  },
});

// this event is emitted only once
request.on('response', (response) => {
  console.log('--------- STATUS ---------');
  console.log(response.statusCode);

  console.log('--------- HEADERS ---------');
  console.log(response.headers);

  console.log('--------- BODY ---------');
  response.on('data', (chunk) => {
    console.log(chunk.toString('utf-8'));
  });

  response.on('end', () => {
    console.log('No more data in response');
  });
});

request.write('Initial test data');

request.end(
  JSON.stringify({
    title: 'Title of my post',
    body: 'This is some test text of my post.',
  })
);
