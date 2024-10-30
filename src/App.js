import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //const [message, setMessage] = useState("Welcome to labweek09!");

  return (
    <div className="App">
      <header className="App-header">
        <img src ={logo} className= "App-logo" alt="React logo"/>
        <h1>Welcome to Fullstack Development - I </h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p>101420473</p>
        <p>Dhruvi Patel</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;

