# Express.js Middleware info

## What Is middleware in express?

Middleware functions in Express are functions that have access to the request (`req`), response (`res`), and the `next()` function. They sit in the middle of the request-response cycle and can:

- Execute any code
- Modify `req` and `res`
- End the request-response cycle
- Call the next middleware in the stack using `next()`

### Basic Middleware Syntax

```js
app.use((req, res, next) => {
  // Do something with req or res
  next(); // Pass control to the next middleware
});
```

## Global error-handling middleware

Express has a special type of middleware for handling errors. It is recognized by having **4 parameters** instead of 3:

```js
function errorHandler(err, req, res, next) {
  // Handle the error
  res.status(500).json({ message: err.message });
}
```

- `err`: The error object or message
- `req`: The request object
- `res`: The response object
- `next`: The next middleware (optional, used to pass the error along)

**Express only treats a middleware as an error handler if it has four parameters.**

### Usage

You register the error handler at the end of all your routes and middleware:

```js
app.use(errorHandler);
```

## How `next()` works?

The `next()` function is used to pass control to the next middleware in the stack.

### Regular Flow

```js
next(); // Proceeds to the next middleware
```

### Triggering the Error Handler

If you pass any argument to `next()`, Express **skips all remaining non-error middleware** and jumps straight to the error handler.

```js
next(new Error("Something went wrong")); // Goes to the global error handler
```

## Example: Full Flow

```js
const express = require("express");
const app = express();

// Regular middleware
app.use((req, res, next) => {
  console.log("This runs first");
  next(); // Pass to the next middleware
});

// Route handler
app.get("/", (req, res, next) => {
  const err = new Error("Oops! Something failed.");
  next(err); // Skip to error handler
});

// Global error handler (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## Content of this section

- **middlewares-chain**
- **handling-errors**
