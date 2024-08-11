const { Worker } = require('node:worker_threads');
const http = require('node:http');

const server = http.createServer((req, res) => {
  // get the count value as param or use a default one
  const url = new URL(req.url, `http://${req.headers.host}`);
  const count = parseInt(url.searchParams.get('count')) || 9000000000;

  if (req.url === '/non-blocking') {
    const worker = new Worker('./counter.js', {
      workerData: { count },
    });

    console.log('Worker started');

    worker.on('message', (msg) => {
      console.log('Worker completed');

      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end(msg);
    });

    worker.on('error', (err) => {
      console.error('Worker error:', err);

      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('Internal Server Error');
    });
  } else if (req.url === '/blocking') {
    for (let i = 0; i < count; i++) {}

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Slow operation completed');
  } else {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Normal operation completed');
  }
});

server.listen(3000, () => {
  console.log('App listening on port 3000');
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
