import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0i5hl0ctttkjzb6f.us.auth0.com"
     clientId="nnVphrmCPnadbUgQnb2dncewwftdIPfT"
     authorizationParams={{
      redirect_uri: "http://localhost:5174"
     }}
     audience="https://real-estate-full-stack-2cwo.vercel.app/api"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
