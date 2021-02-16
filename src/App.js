import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count';

export const Context = createContext();

const data = {
  name: '羊',
  count: 0
};

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
        <Context.Provider value={data} >
          <Count />
        </Context.Provider>
      </header>

    </div>
  );
}

export default App;
