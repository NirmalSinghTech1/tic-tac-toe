import { useState } from "react";

import "./App.css";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import GameRestart from "./components/GameRestart";

const X = (
  <svg width="120" height="120" viewBox="0 0 120 120">
    <line
      className="draw-x"
      x1="20"
      y1="20"
      x2="100"
      y2="100"
      stroke="#ef4444"
      strokeWidth="15"
      strokeLinecap="round"
    />
    <line
      className="draw-x"
      x1="100"
      y1="20"
      x2="20"
      y2="100"
      stroke="#ef4444"
      strokeWidth="15"
      strokeLinecap="round"
    />
  </svg>
);

const O = (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <circle
      className="draw-circle"
      cx="70"
      cy="70"
      r="50"
      stroke="#179fff"
      strokeWidth="15"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

function App() {
  const [playerTurn, setPlayerTurn] = useState(X);

  function handlePlayerTurn() {
    setPlayerTurn((prevTurn) =>
      prevTurn === X ? (prevTurn = O) : (prevTurn = X),
    );
  }

  return (
    <>
      <main>
        <div id="players-container">
          <h2>PLAYERS</h2>
          <div id="players">
            <Player sign="X" name="player 1" score={0} />
            <Player sign="O" name="player 2" score={0} />
          </div>
        </div>
        <section id="main-container">
          <Scoreboard />
          <Gameboard playerTurn={playerTurn} onPlayerTurn={handlePlayerTurn} />
          <GameRestart turn={playerTurn === X ? "X" : "O"} />
        </section>
      </main>
    </>
  );
}

export default App;
