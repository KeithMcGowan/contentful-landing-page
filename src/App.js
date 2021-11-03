import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyName } from "./components/MyName/MyName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyName />
      </header>
    </div>
  );
}

export default App;
