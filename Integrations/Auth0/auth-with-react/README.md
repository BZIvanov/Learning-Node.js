# Auth0 with React

Check this [link](https://auth0.com/docs/quickstart/spa/react) for official docs example or follow the steps below for fast overview.

## Demo app files

Some of the boilerplate code files were removed for simplicity. You can just setup your React app anyway you want and use the content of these files.

## Setting up your Auth0 application

1. First go to Auth0 website and register account or login with existing.
2. From the menu on the left go to **Applications** > **Applications** and click the button **Create application**.
3. Give it a name then select **Single Page Web Applications** and click **Create** button.
4. Select **React** as technology.
5. Click the **Settings** tab.
6. Scroll down to **Application URIs** section and for **Allowed Callback URLs** provide value `http://localhost:3000`. Do the same for **Allowed Logout URLs** and **Allowed Web Origins**. Click the **Save** button. Make sure your app is running on port 3000 for this demo, because it is the port we provided to `auth0`.
7. Run in your react app `npm install @auth0/auth0-react` to install `auth0` package.
8. On the **Settings** under **Basic information** section, you can find **Domain** and **Client ID** values which you will need for the `.env` file.
