import React, { useState, useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

import './style.scss';

function Header() {
  const { authenticated, userAuthenticated, login, logout } = useContext(
    AuthContext
  );
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <header className="ml-header">
      <div>Logo</div>
      <div>
        <input type="search" value={search} onChange={handleChange} />
      </div>
      <div>
        {authenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <div>{authenticated && <span>{userAuthenticated.username}</span>}</div>
      </div>
    </header>
  );
}

export default React.memo(Header);
