import crypto from "node:crypto";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

// Parse cookies
app.use(cookieParser());

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Generate a secure CSRF token
function generateCsrfToken() {
  return crypto.randomBytes(32).toString("hex");
}

// GET: Serve form and issue CSRF token
app.get("/", (req, res) => {
  const csrfToken = generateCsrfToken();

  // Store token in cookie
  res.cookie("csrf_token", csrfToken, {
    httpOnly: true,
    sameSite: "strict",
    // secure: true // Uncomment if using HTTPS
  });

  // Serve form with token embedded
  res.send(`
    <h1>Manual CSRF Protection Example</h1>
    <form action="/process" method="POST">
      <input type="hidden" name="csrf_token" value="${csrfToken}">
      <input type="text" name="data" placeholder="Enter some data">
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST: Validate CSRF token
app.post("/process", (req, res) => {
  const tokenFromForm = req.body.csrf_token;
  const tokenFromCookie = req.cookies.csrf_token;

  if (!tokenFromForm || !tokenFromCookie || tokenFromForm !== tokenFromCookie) {
    return res.status(403).send("Invalid CSRF token");
  }

  res.send("Data submitted successfully with valid CSRF token!");
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
