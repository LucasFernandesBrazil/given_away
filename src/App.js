import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondtDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./assets/${firstDieResult}.png`).default;
  const secondDieImage = require(`./assets/${secondtDieResult}.png`).default;

  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>{firstDieResult + secondtDieResult}</span>
        <button className="button" onClick={rollDice}>
          Roll
        </button>
      </header>
    </div>
  );
}

export default App;
