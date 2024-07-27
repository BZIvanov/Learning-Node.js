const net = require('node:net');
const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearTerminalLine = (direction) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(direction, () => {
      resolve();
    });
  });
};

const moveTerminalCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

let id;

const socket = net.createConnection(
  { host: '127.0.0.1', port: 3000 },
  async () => {
    console.log('Connected to the server');

    const ask = async () => {
      const message = await rl.question('Your message > ');

      // move the cursor one line up
      await moveTerminalCursor(0, -1);
      // clear the current line
      await clearTerminalLine(0);

      socket.write(`${id}-message-${message}`);
    };

    ask();

    socket.on('data', async (data) => {
      console.log();

      await moveTerminalCursor(0, -1);
      await clearTerminalLine(0);

      if (data.toString('utf-8').startsWith('id-')) {
        id = data.toString('utf-8').substring(3);

        console.log(`Your id is ${id}\n`);
      } else {
        console.log(data.toString('utf-8'));
      }

      ask();
    });
  }
);

socket.on('error', (err) => {
  console.log('Client error', err);
});

socket.on('end', () => {
  console.log('Connection ended');
});
