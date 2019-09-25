import React, {useState} from "react";
import logo from "./logo.svg";
import "nes.css/css/nes.min.css";
import Menu from "./Components/Menu";
import "./App.css";

function App() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Menu menuOpen={menuOpen} />
      <button
          type="button"
          className="nes-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      <img src={logo} alt="Lauchie" className="App-logo" />
    </div>
  );
}

export default App;
