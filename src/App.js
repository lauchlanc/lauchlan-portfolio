import React from "react";
import logo from "./logo.svg";
import "nes.css/css/nes.min.css";
import Menu from "./Components/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <img src={logo} alt="Lauchie" className="App-logo" />
    </div>
  );
}

export default App;
