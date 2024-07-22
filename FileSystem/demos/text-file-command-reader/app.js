const fs = require('node:fs/promises');

const CREATE_FILE = 'CREATE';
const DELETE_FILE = 'DELETE';
const RENAME_FILE = 'RENAME';
const ADD_TO_FILE = 'ADD';

const createFile = async (path) => {
  try {
    const existingFileHandle = await fs.open(path, 'r');
    await existingFileHandle.close();
    console.log(`The file ${path} already exists`);
  } catch (exc) {
    const newFileHandle = await fs.open(path, 'w');
    console.log('File created');
    await newFileHandle.close();
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
    console.log('File removed');
  } catch (exc) {
    if (exc.code === 'ENOENT') {
      console.log('No file found');
    } else {
      console.log('Error removing a file: ', exc);
    }
  }
};

const renameFile = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
    console.log('File renamed');
  } catch (exc) {
    if (exc.code === 'ENOENT') {
      console.log('No file found or destination does not exist');
    } else {
      console.log('Error renaming a file: ', exc);
    }
  }
};

const addToFile = async (path, content) => {
  try {
    await fs.writeFile(path, content, { flag: 'a' });
    console.log('Content added');
  } catch (exc) {
    console.log('Error adding to a file: ', exc);
  }
};

const handleCommand = async (command) => {
  if (command.startsWith(CREATE_FILE)) {
    const filePath = command.substring(CREATE_FILE.length + 1).trim();
    await createFile(filePath);
  }
  if (command.startsWith(DELETE_FILE)) {
    const filePath = command.substring(DELETE_FILE.length + 1).trim();
    await deleteFile(filePath);
  }
  if (command.startsWith(RENAME_FILE)) {
    const idx = command.indexOf(' TO ');
    const oldFilePath = command.substring(RENAME_FILE.length + 1, idx).trim();
    const newFilePath = command.substring(idx + 4).trim();
    await renameFile(oldFilePath, newFilePath);
  }
  if (command.startsWith(ADD_TO_FILE)) {
    const idx = command.indexOf(' TEXT ');
    const filePath = command.substring(ADD_TO_FILE.length + 1, idx).trim();
    const content = command.substring(idx + 6).trim();
    await addToFile(filePath, content);
  }
};

(async () => {
  let commandFileHandle;
  try {
    commandFileHandle = await fs.open('./command.txt', 'r');
    const watcher = fs.watch('./command.txt');

    for await (const event of watcher) {
      if (event.eventType === 'change') {
        const fileStats = await commandFileHandle.stat();

        const buffer = Buffer.alloc(fileStats.size);
        const offset = 0;
        const length = buffer.byteLength;
        const position = 0;

        // Read the entire content of the file
        await commandFileHandle.read(buffer, offset, length, position);

        const command = buffer.toString('utf-8').trim();
        await handleCommand(command);
      }
    }
  } catch (exc) {
    console.log('Error: ', exc);
  } finally {
    if (commandFileHandle) {
      await commandFileHandle.close();
    }
  }
})();
