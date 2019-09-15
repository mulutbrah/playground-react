import React, { useEffect } from "react";

import AuthContext from "contexts/AuthContext";

import Header from "components/Header";

import "./App.css";

function App() {
  // componentDidMount()
  useEffect(() => {
    console.log("[App.js] componentDidMount");

    return () => {
      console.log("[App.js] componentDidUnmount");
    };
  }, []);

  // shouldComponentUpdate, Optimizing Performance by Skipping Effects
  // useEffect(() => {
  //   console.log("[App.js] shouldComponentUpdate");
  // }, [input]);

  return (
    <div className="App">
      <AuthContext>
        <Header />
      </AuthContext>
    </div>
  );
}

export default App;
