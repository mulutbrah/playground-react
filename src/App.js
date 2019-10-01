import React, { useEffect } from 'react';

import Home from 'pages/home';
import Swapi from 'pages/swapi';

import AuthContext from 'contexts/AuthContext';

import Header from 'components/Header';

import './App.css';

function App() {
  // componentDidMount()
  useEffect(() => {
    console.log('[App.js] componentDidMount');

    return () => {
      console.log('[App.js] componentDidUnmount');
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
        <Swapi />
      </AuthContext>
    </div>
  );
}

export default App;
