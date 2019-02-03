const http = require('http');
const port = 3000;
// in handlers folder we have many files, but by default if we have index file in the folder it will be loaded even if we dont specify its name
const handlers = require('./handlers');

let environment = process.env.NODE_ENV || 'development';
const config = require('./config/config');
const database = require('./config/database.config');

database(config[environment]);

http.createServer((req, res) => {
    for(let handler of handlers) {
        // if the requested url is matched by one of the handlers we will display it and break from the loop
        if(!handler(req, res)) {
            break;
        }
    }
}).listen(port, () => console.log(`Listening on port ${port}...`));
