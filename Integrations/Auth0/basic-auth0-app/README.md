# Auth0

To use Auth0 service you need to create your account.

## Create Application

1. From the menu on the left select **Applications** > **Applications** and click **Create application**.
2. Give it a name and select **Regular Web Applications**. Click **Create**.
3. Select technology **Node.js with Express** and click **Integrate Now**.
4. Provide value `http://localhost:3000/callback` for **Allowed Callback URLs** and `http://localhost:3000` for **Allowed Logout URLs**. Click **Save Settings And Continue** button.
5. On the **Quickstart** tab you should be able to see you configs, which you need for the `.env` file.
6. Now visit `http://localhost:3000/login` in the browser and you should be able to see **auth0** login form.
7. To logout visit `http://localhost:3000/logout`.
8. Login and Logout routes are provided by Auth0, you don't have to create them.
