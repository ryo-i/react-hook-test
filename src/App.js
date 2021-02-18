import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count';
// import dataJson from './data.json';

export const Context = createContext();

let data = {};
console.log(data);

/* const getData = () => {
  fetch('http://localhost:3001/data/1/')
      .then(res => res.json())
      .then(
        (result) => {
          data = result;
          console.log(data);
        },
        (error) => {
          console.log(error);
          const errData = {
            name: '名無し',
            count: 0
          }
          data = errData;
        }
      )
};
getData(); */

function App() {
  data = {
    name: '山羊',
    count: null
  };
  console.log(data);
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
