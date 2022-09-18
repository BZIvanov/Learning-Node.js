require('dotenv').config();
const http = require('http');
const mongoDbConnect = require('./db/mongo');
const app = require('./app/index');

const server = http.createServer(app);

const startServer = async () => {
  await mongoDbConnect();

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
};

startServer();

/* 
For debugging in the terminal write "npm run debug"
In the browser open "chrome://inspect"

To kill terminal process use "ctrl+c" and agree with "Y"
*/
