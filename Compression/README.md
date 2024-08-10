# Compression

Compression is done to improve the performance of web applications by decreasing the amount of data that needs to be transmitted over the network, which can speed up load times and reduce bandwidth usage.

Compression works by encoding data using algorithms like Gzip or Brotli, which reduce redundancy and represent data more efficiently.

- **Gzip**: A widely supported compression method that can significantly reduce the size of HTML, CSS, JavaScript, and other text-based files.
- **Brotli**: A newer compression algorithm that can offer better compression rates than Gzip, especially for text-based files, and is supported by most modern browsers.

## Compression data types

### Gzip

Gzip is one of the oldest and most widely supported compression methods. It is based on the DEFLATE algorithm, which combines LZ77 and Huffman coding. Gzip is highly effective at compressing text-based content like HTML, CSS, and JavaScript.

Content-Encoding Header: `gzip`

### Brotli

Brotli is a newer compression algorithm developed by Google. It generally provides better compression ratios than Gzip, especially for text files. Brotli is becoming increasingly popular due to its efficiency and is supported by most modern browsers.

Content-Encoding Header: `br`

### Deflate

Deflate is another compression algorithm based on a combination of the LZ77 algorithm and Huffman coding. It is similar to Gzip but does not include the file header or checksum, making it slightly more efficient in some cases.

Content-Encoding Header: `deflate`

## Choosing compression type

There is no one best solution. It is trade-off between file size and processing time. For example 30 seconds and 30MBs vs. 120 seconds and 20MBs

## Compression data types

- **Lossless Compression**: Ideal for applications where data integrity is crucial. It retains all the original data and is used in contexts where accuracy cannot be compromised, such as text files, databases, and certain image formats like PNG.

- **Lossy Compression**: Best for situations where reducing file size is more important than retaining all original data. It's commonly used in multimedia contexts like images (JPEG), audio (MP3), and video (H.264), where some loss of quality is acceptable to achieve smaller files.

## Compression LZ77 algorithms simplified

Consider the following text:

_The grass is green and the apple is also green, they are both green._

In this text, the word _green_ appears three times. Instead of storing the word _green_ each time it appears, we can reference its first occurrence when it appears again. This reduces the number of bytes needed to store the text.

For example, the first occurrence of the word _green_ starts at position 14 and has a length of 5 characters. When we encounter _green_ later in the text, instead of storing the word again, we can store a reference to its first occurrence like this: `[14,5]`. This reference tells us to "go back to position 14 and copy the next 5 characters," effectively reconstructing the word _green_ without needing to store it multiple times.

By using such references, the LZ77 algorithm can significantly reduce the amount of data needed to represent repetitive content, making it a powerful tool for data compression. This technique is commonly used in formats like ZIP and PNG.
