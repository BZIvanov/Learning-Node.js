import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react"; // v2.3.0

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      // ideally, these values should be stored in environment variables
      domain="dev-145lzcne.eu.auth0.com"
      clientId="Ytk4FR2k5JlILbAIdWzYCANQ40HlnOhe"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
