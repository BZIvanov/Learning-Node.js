const fs = require('node:fs');
const http = require('node:http');

const server = http.createServer(frontController);

function frontController(req, res) {
  // readFile method reads file asynchronous. The first parameter is which file to read, the second is what type of encoding to use. The result from readFile method is send to callback function which has 2 parameters, the first is error if something is wrong and second is the data result if all is correct. WriteHead, write, end methods etc are now in the callback to use them once we are ready with reading the html file.
  fs.readFile('./index.html', 'utf8', (err, indexPageData) => {
    // first check if error happened
    if (err) {
      // if error happened we will enter here and now we will read another file containing page which will display error message
      fs.readFile('./error.html', 'utf8', (err, errorPageData) => {
        res.writeHead(404, {
          'content-type': 'text/html',
        });
        res.write(errorPageData);
        res.end();
      });
      // return here is important because res.end() doesn't break from function and code below will be completed which will cause error because we can't use write methods on response once after we used res.end()
      return;
    }

    // if no error above we will end on this piece of code
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write(indexPageData);
    res.end();
  });
}

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
