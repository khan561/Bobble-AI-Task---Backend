import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
require('dotenv').config();

const oAuthDomain = process.env.REACT_APP_AUTH0_DOMAIN;
const oAuthClientId = process.env.REACT_APP_AUTH_CLIENT_ID;

console.log("here: ",[oAuthDomain,oAuthClientId]);
ReactDOM.render(
  <Auth0Provider
    domain={oAuthDomain}
    clientId={oAuthClientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
