import React, { useContext, useEffect } from "react";

import AuthContext from "context/authContext";

import "./style.scss";

export default function Header(props) {
  // consumer
  const authContext = useContext(AuthContext);

  console.log("context: ", props.context);

  useEffect(() => {
    console.log(authContext);
  }, []);

  return (
    <header className="ml-header">
      <div>Logo</div>
      <div>
        <input type="search" />
      </div>
      <div>
        {JSON.stringify(authContext)}
        <button>Login</button>
      </div>
    </header>
  );
}
