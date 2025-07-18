# MongoDB session demo

## About

This is example of how to use session on the backend with database and cookies on the client.

To test this you can observe cookies in the browser and the data in the mongo database.

## Workflow for session-cookies authentication

When the browser make request to the backend, the backend will create session. The session will be stored in the database, because if we use only in memory and have million of users we will run out of memory.

Then the backend will send cookie to the browser with which on every next request we will use it to identify which browser with which session is connected.

## Security

Using session and cookies is vulnerable to **CSRF** attacks. It is possible, because we get the cookies from the browser and a hacker can mimic our site, form or something similar and to fool the user and get access to user's data.

We can use package called **csurf** to prevent that. What the package does is basically to create csurf token for our view and to make sure our rendered view is used on the browser, not some similarly looking website.
