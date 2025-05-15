// keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'add-your-realm-here',
  clientId: 'add-your-clientId-here',
});

export const keycloakInit = keycloak.init({ onLoad: 'login-required' });

export default keycloak;
