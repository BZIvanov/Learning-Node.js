const http = require('http');
const url = require('url');
const fs = require('fs');

const staticHandler = require('./handlers/static');
const homeHandler = require('./handlers/home');
const aboutHandler = require('./handlers/about');
const errorHandler = require('./handlers/error');

const port = 5000;

const server = http.createServer(frontController);

function frontController(req, res) {
    req.path = url.parse(req.url).pathname;

    // sendHtml is our custom function which we will use in handlers to save writing similar code in every handler
    res.sendHtml = (path) => {
        fs.readFile(path, 'utf8', (err, data) => {
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    }

    const handlers = [
        staticHandler,
        homeHandler,
        aboutHandler,
        errorHandler
    ];

    for(let handler of handlers) {
        if(handler(req, res) !== true) {
            break;
        }
    }
}

server.listen(port);
console.log(`Listening on port ${port}...`);