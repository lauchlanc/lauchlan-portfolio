import React from "react";
import logo from "./logo.svg";
import "nes.css/css/nes.min.css";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <img src={logo} alt="Lauchie" className="App-logo" />
    </div>
  );
}

export default App;
