import express from "express";

const app = express();
const PORT = 3000;

// Custom Error Class (optional)
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Async handler wrapper
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Synchronous route (error is caught automatically)
app.get("/sync-error", (req, res) => {
  throw new AppError("Synchronous error occurred!", 400);
});

// Async route (needs wrapper or manual try/catch)
app.get(
  "/async-error",
  asyncHandler(async (req, res, next) => {
    // Simulate async error
    await Promise.reject(new AppError("Async error occurred!", 500));
  })
);

// Optional: Without wrapper, using try/catch manually
app.get("/async-error-manual", async (req, res, next) => {
  try {
    await Promise.reject(new AppError("Manual catch async error!", 500));
  } catch (err) {
    next(err);
  }
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
