const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Open https://localhost:3000 to see your response.');
});

// with https we have the option to pass the certificate as configuration object to the createServer
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'certificate', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certificate', 'cert.pem')),
  },
  app
);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
