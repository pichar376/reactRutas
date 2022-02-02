import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente.js";

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
      </header>
    
      <section>
<Componente mesage="hola soy un componente desde una funcion expresada"/>

      </section>
      
      </div>
  );
}

export default App;
