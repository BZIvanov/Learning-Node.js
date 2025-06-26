const fs = require("node:fs");
const https = require("node:https");
const path = require("node:path");

const options = {
  key: fs.readFileSync(path.join(__dirname, "certificate", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "certificate", "cert.pem")),
};

// with https we have the option to pass the certificate as configuration object to the createServer
const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Open https://localhost:3000 to see your response.");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
