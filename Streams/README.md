# Streams

## Types of streams

There are 4 types of streams

- Readable - for reading chunks of data from the source
- Writable - for writing chunks of data to the destination
- Duplex - it is both readable and writeable. Recommended to use _pipe_ in case reading is faster/slower than writing
- Transform - modifying data in output stream based on the input stream. Example is zipping
