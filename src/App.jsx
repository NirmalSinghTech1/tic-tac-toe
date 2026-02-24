import gameLogo from "./assets/game-logo2.png";
import "./App.css";

const X = (
  <svg width="120" height="120" viewBox="0 0 120 120">
    <line
      class="draw-x"
      x1="20"
      y1="20"
      x2="100"
      y2="100"
      stroke="#ef4444"
      stroke-width="15"
      stroke-linecap="round"
    />
    <line
      class="draw-x"
      x1="100"
      y1="20"
      x2="20"
      y2="100"
      stroke="#ef4444"
      stroke-width="15"
      stroke-linecap="round"
    />
  </svg>
);
const O = (
  <svg width="140" height="140" viewBox="0 0 140 140">
    <circle
      class="draw-circle"
      cx="70"
      cy="70"
      r="50"
      stroke="#179fff"
      stroke-width="15"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

function App() {
  return (
    <>
      <header>
        <img
          src={gameLogo}
          alt="Tic tac toe 3d logo"
          width={250}
          height={250}
          className="main-logo"
        />
        <h1>TIC TAC TOE</h1>
      </header>
      <main>
        <div id="players-container">
          <h2>PLAYERS</h2>
          <div id="players">
            <div className="player1">
              <div>
                <p>PLAYER 1</p>
                <p className="score">0</p>
              </div>
              <button>Edit</button>
            </div>
            <div className="player2">
              <div>
                <p>PLAYER 2</p>
                <p className="score">0</p>
              </div>
              <button>Edit</button>
            </div>
          </div>
        </div>
        <section id="game-board">
          <div className="game-board-container">
            <ol>
              <li>{X}</li>
              <li>{O}</li>
              <li>{X}</li>
            </ol>
            <ol>
              <li>{X}</li>
              <li>{O}</li>
              <li>{O}</li>
            </ol>
            <ol>
              <li>{O}</li>
              <li>{X}</li>
              <li>{X}</li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
