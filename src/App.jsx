import gameLogo from "./assets/game-logo2.png";
import "./App.css";
import { FaEdit } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";

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
              <span className="player-sign">X</span>
              <div className="player-name-section">
                <p>PLAYER 1</p>
                <button className="name-edit-button">
                  <FaEdit className="name-edit-icon" />
                </button>
              </div>
              <p className="score">5</p>
            </div>
            <div className="player2">
              <span className="player-sign">O</span>
              <div className="player-name-section">
                <p>PLAYER 2 </p>
                <button className="name-edit-button">
                  <FaEdit className="name-edit-icon" />
                </button>
              </div>
              <p className="score">10</p>
            </div>
          </div>
        </div>
        <section id="main-container">
          <div id="scoreboard">
            <h3>
              <span>
                <HiOutlineTrophy
                  style={{ color: "yellow", fontSize: "1.5rem" }}
                />
              </span>{" "}
              SCOREBOARD
            </h3>
            <div className="player1-sign">
              <span className="sign">X</span>
              <span className="player1-score">3</span>
            </div>
            <div className="tie">
              <span className="sign">TIE</span>
              <span className="tie-score">0</span>
            </div>
            <div className="player2-score">
              <span className="sign">O</span>
              <span className="player2-score">5</span>
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
          <div id="game-restart-container">
            <span>X's turn</span>
            <button className="btn-new-game">New Game</button>
            <button className="btn-reset-all">Reset All</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
