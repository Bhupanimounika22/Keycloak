// App.jsx
import React, { useEffect, useState } from 'react';
import keycloak, { keycloakInit } from './keycloak';

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    keycloakInit.then(auth => {
      setAuthenticated(auth);
      console.log("Auth:", auth);
      console.log("Keycloak Token Parsed:", keycloak.tokenParsed);
    }).catch(err => {
      console.error("Keycloak init failed:", err);
    });
  }, []);

  const handleLogin = () => keycloak.login();
  const handleSignup = () => keycloak.register(); // 👈 opens Keycloak's signup page
  const handleLogout = () => keycloak.logout({ redirectUri: window.location.href });

  if (authenticated === null) return <p>Loading...</p>;

  if (authenticated) {
    return (
      <div>
        <h1>Welcome {keycloak.tokenParsed?.preferred_username}</h1>
        <p>Session ID: {keycloak.tokenParsed?.session_state}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <p>Not authenticated</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default App;
