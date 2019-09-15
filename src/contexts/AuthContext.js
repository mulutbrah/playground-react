import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    authenticated: false,
    userAuthenticated: {
      username: "lutfi",
      email: "mlutfiibra@outlook.com"
    }
  };

  login = () => {
    console.log("login");
    this.setState({ authenticated: true });
  };

  logout = () => {
    console.log("login");

    this.setState({ authenticated: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
