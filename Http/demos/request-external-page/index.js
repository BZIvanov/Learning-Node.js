const http = require('node:http');
const https = require('node:https');

// we will get an error if we try to call https with the http module
const req = http.request('http://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`CHUNK: ${chunk}`);
  });

  res.on('end', () => {
    console.log('\nNO MORE DATA\n');
  });
});

req.end();

const reqS = https.request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`CHUNK: ${chunk}`);
  });

  res.on('end', () => {
    console.log('\nNO MORE DATA\n');
  });
});

reqS.end();
