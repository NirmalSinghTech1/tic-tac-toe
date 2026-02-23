import gameLogo from "./assets/game-logo2.png";
import "./App.css";

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
      <section id="game-board">
        <div className="game-board-container">
          <ol>
            <li>
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
            </li>
            <li>
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
            </li>
            <li></li>
          </ol>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default App;
