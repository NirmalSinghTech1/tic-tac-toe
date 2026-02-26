import "./App.css";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import GameRestart from "./components/GameRestart";

function App() {
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
          <Gameboard />
          <GameRestart />
        </section>
      </main>
    </>
  );
}

export default App;
