# CSRF

This is a simple demonstration of how to implement CSRF (Cross-Site Request Forgery) protection in a Node.js app.

CSRF protection prevents malicious sites from submitting unauthorized requests to your application on behalf of an authenticated user.

## How to inspect the CSRF process

To observe the CSRF token in action:

1. **Open DevTools**

Open your browser's **DevTools** (Right-click → Inspect → **Network** tab).

2. **Load the Form Page**

Go to `http://localhost:3000/`. You'll see a form with a hidden input field named `csrf_token`.

You can inspect the page source or use the **Elements** tab to see:

```html
<input type="hidden" name="csrf_token" value="..." />
```

3. **Submit the Form**

Enter any value and click the **Submit** button.

In the **Network** tab:

- Look for a `POST` request to `/process`.
- Click the request and go to the **Headers** and **Payload** sections.

You should see:

**Request Payload:**

```text
csrf_token: <the token>
data: <your input>
```

**Request Cookies:**
Under **Headers > Cookie**, you'll see a cookie like:

```text
csrf_token=<same token as above>
```

4. **Tampering Test (Optional)**

To test CSRF protection:

- Use DevTools to remove or change the `csrf_token` value in the form before submitting.
- The server will reject the request with a 403 Forbidden error.
