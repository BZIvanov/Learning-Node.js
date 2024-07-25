const { Writable } = require('node:stream');
const fs = require('node:fs');

class FileWriteStream extends Writable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });

    this.fileName = fileName;
    this.fd = null;
    this.chunks = [];
    this.chunksSize = 0;
    this.writesCount = 0;
  }

  _construct(callback) {
    fs.open(this.fileName, 'w', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    this.chunks.push(chunk);
    this.chunksSize += chunk.length;

    if (this.chunksSize > this.writableHighWaterMark) {
      fs.write(this.fd, Buffer.concat(this.chunks), (err) => {
        if (err) {
          return callback(err);
        }

        this.chunks = [];
        this.chunksSize = 0;
        ++this.writesCount;
        callback();
      });
    } else {
      callback();
    }
  }

  _final(callback) {
    fs.write(this.fd, Buffer.concat(this.chunks), (err) => {
      if (err) {
        return callback(err);
      }

      ++this.writesCount;
      this.chunks = [];
      callback();
    });
  }

  _destroy(error, callback) {
    console.log('Num writes', this.writesCount);
    if (this.fd) {
      fs.close(this.fd, (err) => {
        callback(err || error);
      });
    } else {
      callback(error);
    }
  }
}

(async () => {
  console.time('testWrite');

  const stream = new FileWriteStream({
    fileName: 'text.txt',
  });

  let i = 0;

  const writeData = () => {
    while (i < 1_000_000) {
      const buff = Buffer.from(` ${i} `, 'utf-8');

      // the last write
      if (i === 999_999) {
        stream.end(buff);
        return;
      }

      if (!stream.write(buff)) {
        break;
      }

      i++;
    }
  };

  writeData();

  let d = 0;
  // resume the loop once stream's internal buffer is emptied
  stream.on('drain', () => {
    ++d;
    writeData();
  });

  stream.on('finish', () => {
    console.log('Number of drains:', d);
    console.timeEnd('testWrite');
  });
})();
