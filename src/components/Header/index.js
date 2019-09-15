import React, { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import "./style.scss";

function Header() {
  const { authenticated, userAuthenticated, login, logout } = useContext(
    AuthContext
  );

  return (
    <header className="ml-header">
      <div>Logo</div>
      <div>
        <input type="search" />
      </div>
      <div>
        {authenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
      {authenticated && <span>{userAuthenticated.email}</span>}
    </header>
  );
}

export default React.memo(Header);
