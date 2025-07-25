# Express.js error handling

## Synchronous Route

- You can `throw` an error directly.
- Express will catch and forward it to the global error handler.

## Asynchronous Route

- Express **does not catch `throw`** inside `async` functions.
- You must use:
  - `try/catch` + `next(err)`
  - Or a reusable `asyncHandler` wrapper (recommended)

## Global Error Middleware

- Must have **4 parameters**: `(err, req, res, next)`
- Catches all forwarded errors (sync or async)

## Best Practice

Use a wrapper to avoid repetitive try/catch:

```js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

## Available Endpoints in This Demo

- `/sync-error` - Throws a synchronous error. Express catches it automatically.
- `/sync-error` - Throws an asynchronous error using the `asyncHandler` wrapper.
- `/sync-error` - Throws an asynchronous error using manual `try/catch` with `next(err)`.
