// App.jsx
import React, { useEffect, useState } from 'react';
import keycloak, { initializeKeycloak } from './keycloak';

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    initializeKeycloak()
      .then(auth => {
        setAuthenticated(auth);
        console.log("Auth:", auth);
        console.log("Keycloak Token Parsed:", keycloak.tokenParsed);
      })
      .catch(err => {
        console.error("Keycloak init failed:", err);
      });
  }, []);

  const handleLogin = () => keycloak.login();
  const handleSignup = () => keycloak.register();
  const handleLogout = () => keycloak.logout({ redirectUri: window.location.href });

  if (authenticated === null) return <p>Loading...</p>;

  return authenticated ? (
    <div>
      <h1>Welcome {keycloak.tokenParsed?.preferred_username}</h1>
      <p>Session ID: {keycloak.tokenParsed?.session_state}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <p>Not authenticated</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default App;
