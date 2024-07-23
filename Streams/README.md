# Streams

## Types of streams

There are 4 types of streams

- Readable - for reading chunks of data from the source
- Writable - for writing chunks of data to the destination
- Duplex - it is both readable and writeable. Recommended to use _pipe_ in case reading is faster/slower than writing
- Transform - modifying data in output stream based on the input stream. Example is zipping

## Writeable stream

Writable streams in Node.js have events, properties, and methods that help manage the writing of data to a destination.

#### Internal Buffer

A writable stream has an internal buffer with a default size of 16 KB (16384 bytes). This buffer temporarily holds the data chunks before they are actually written to the destination.

#### Writing Data

When you call the `write()` method, data chunks are pushed into this internal buffer. Once the buffer is full, the data is written out. Here’s an example with dummy values: if you push data chunks of sizes 323, 149, 428, 2316, 7125, 9, 3865, and 2169 bytes, they fill the buffer. After the buffer reaches its limit, the stream writes the data.

#### Buffer Overflow

If you attempt to write a large chunk of data (e.g., 100 MB) directly to the buffer, it can cause memory issues since the data is stored in memory. To handle this, the writable stream needs to drain the buffer, meaning it empties the buffer by writing data out so it can accept more data.

To avoid sending huge chunks of data, you should create a readable stream from the large chunk of data and then send those smaller chunks to the writable stream. This ensures that the data is broken down into manageable pieces, which are of the same size as the writable stream’s buffer. By using a readable stream to break down large chunks of data, you can effectively manage the writable stream’s buffer and avoid memory issues.

#### Draining

Draining is the process of emptying the buffer to free up space for more data. When the buffer is full, the `write()` method returns `false`, indicating that the stream is busy. You should listen for the `drain` event, which signals that the buffer has been emptied and you can continue writing more data.

#### Key Points

- **Events**: Key events include `drain` (when the buffer is emptied), `finish` (when the stream is finished), and `error` (when an error occurs).
- **Methods**: Important methods are `write()` (to write data), `end()` (to signal the end of writing), and `cork()`/`uncork()` (to control the buffering).
- **Properties**: Properties like `writableHighWaterMark` (buffer size) and `writableLength` (current buffer usage) help manage the stream’s state.

## Readable stream

Readable streams in Node.js also have events, properties, and methods that help manage the reading of data from a source.

#### Internal Buffer

A readable stream has an internal buffer that temporarily holds data chunks before they are consumed. The size of this buffer can vary depending on the stream and its configuration.

#### Pushing Data

Data is pushed into the internal buffer using the push() method. This method adds data chunks to the buffer, and once the buffer reaches its high-water mark (default size is 16 KB), the stream manages the flow to prevent overflowing.

#### Consuming Data

Data from the buffer is consumed by attaching event listeners to the stream. When data is available, the stream emits the `data` event with the chunk of data.

#### Buffer Overflow

If you push a large chunk of data into the buffer all at once, it can fill up quickly, causing the stream to control the flow to avoid memory issues. The stream will stop calling the read() method until the buffer is emptied.

#### Draining the Buffer

When the buffer is full, the readable stream temporarily stops reading data from the source until the buffer is drained by consuming data. This mechanism helps in managing backpressure effectively.

#### Key Points

- **Events**: Key events include `data` (when a chunk of data is available), `end` (when the stream has no more data), and `error` (when an error occurs).
- **Methods**: Important methods are `push()` (to add data to the buffer), `read()` (to manually read data), and `pipe()` (to pipe the stream to a writable stream).
- **Properties**: Properties like `readableHighWaterMark` (buffer size) and `readableLength` (current buffer usage) help manage the stream’s state.
