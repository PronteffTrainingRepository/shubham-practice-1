import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Views/Sample';
import Sam from './Views/Sample1';

function App() {
  return (
    <div className="App">
      <Sample></Sample>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Sam></Sam>
        </a>
      </header>
    </div>
  );
}

export default App;
