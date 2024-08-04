const fs = require('node:fs');
const path = require('node:path');
const logger = require('./logger.js');

console.log('Current working directory: ', process.cwd());

// this will work, because require will correctly use the relative path
console.log(logger());

// this will work, because we provided the absolute path
const content1 = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf-8');
console.log(content1);

// this will not work, because the current working directory is the parent of src folder
// the problem will be that we are trying to find text2.txt in the parent of src folder
const content2 = fs.readFileSync('./text2.txt', 'utf-8');
console.log(content2);
