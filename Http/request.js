const http = require('http');
const https = require('https');

// we will get an error if we try to call https with the http module
const req = http.request('http://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Chunk: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data');
  });
});

req.end();

const reqS = https.request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Chunk: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data');
  });
});

reqS.end();
