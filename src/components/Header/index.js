import React, { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import "./style.scss";

function Header() {
  const { authenticated, userAuthenticated } = useContext(AuthContext);

  console.log("context: ", authenticated);
  console.log("context: ", userAuthenticated);

  return (
    <header className="ml-header">
      <div>Logo</div>
      <div>
        <input type="search" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </header>
  );
}

export default React.memo(Header);
