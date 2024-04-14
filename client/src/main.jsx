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
      redirect_uri: "https://real-estate-full-stack-ians-fa43wgk2n-hardiks-projects-05c01778.vercel.app"
     }}
     audience="http://localhost:8000/api"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
