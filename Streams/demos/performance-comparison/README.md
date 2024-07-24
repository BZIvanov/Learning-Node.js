# Performance comparison

|                | callback | promise | stream-bad | stream-good |
| -------------- | -------- | ------- | ---------- | ----------- |
| time (seconds) | ~4       | ~40     | ~0.4       | ~3          |
| memory (MB)    | ~27      | ~40     | ~229       | ~38         |

Stream example completes in a fraction of the time compared to the other methods, but it consumes significantly more memory. This high memory usage is due to the lack of proper flow control, causing the internal buffer to overflow as data is written faster than it can be flushed to disk.

The stream demo has 2 examples of bad and good implementation.
