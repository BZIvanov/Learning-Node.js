const { stdin, stdout, stderr } = require('node:process');

// type something in the terminal to get the data
stdin.on('data', (data) => {
  if (data.toString('utf-8').startsWith('end it')) {
    stdin.end(); // Ends the stream
    process.exit(); // Terminates the process
  }

  stdout.write(`IN DATA: ${data.toString('utf-8')}`);
});

stdout.write('Out some text\n');

stderr.write('Err some text\n');
