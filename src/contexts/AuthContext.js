import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userAuthenticated] = useState({
    username: 'lutfi',
    email: 'mlutfiibra@outlook.com',
  });

  function login() {
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        userAuthenticated,
        login: login,
        logout: logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
