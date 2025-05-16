// keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'name-of-your-realm',
  clientId: 'your-client-Id',
});

let initOptions = {
  onLoad: 'login-required',
  checkLoginIframe: false, // helps prevent iframe timeout errors
};

let initialized = false;
let keycloakInitPromise = null;

export const initializeKeycloak = () => {
  if (!initialized) {
    initialized = true;
    keycloakInitPromise = keycloak.init(initOptions);
  }
  return keycloakInitPromise;
};

export default keycloak;
