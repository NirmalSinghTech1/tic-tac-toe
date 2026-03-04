import { useState, useRef } from "react";
import confetti from "canvas-confetti";

import "./App.css";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import GameRestart from "./components/GameRestart";
import WINNING_COMBINATIONS from "./WinningCombinations.js";

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const INITIAL_SCORES = { X: 0, tie: 0, O: 0 };
const INITIAL_WINNER_DRAW = { winner: null, isDraw: false };

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

function checkWinner(board) {
  for (const combination of WINNING_COMBINATIONS) {
    const first = board[combination[0].row][combination[0].col];
    const second = board[combination[1].row][combination[1].col];
    const third = board[combination[2].row][combination[2].col];

    if (first && first === second && first === third) {
      return first === X ? "X" : "O";
    }
  }
  return null;
}

function dropConfetti() {
  let end = Date.now() + 1 * 1000;
  let colors = ["#ef4444", "#179fff"];
  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function App() {
  const [playerTurn, setPlayerTurn] = useState(X);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAMEBOARD);
  const [scores, setScores] = useState(INITIAL_SCORES);
  const winnerRef = useRef(INITIAL_WINNER_DRAW);

  function handleShowSymbol(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] || checkWinner(gameBoard)) return;

    setGameBoard((prevGameBoard) => {
      const newBoard = [...prevGameBoard].map((cols) => [...cols]);
      newBoard[rowIndex][colIndex] = playerTurn;

      const gameWinner = checkWinner(newBoard);
      if (gameWinner && winnerRef.current.winner !== gameWinner) {
        dropConfetti();
        winnerRef.current.winner = gameWinner;
        setScores((prevScores) => ({
          ...prevScores,
          [gameWinner]: prevScores[gameWinner] + 1,
        }));
      }

      const isDraw = newBoard.every((row) => row.every((col) => col !== null));
      if (isDraw && !gameWinner && !winnerRef.current.isDraw) {
        winnerRef.current.isDraw = true;
        setScores((prevScore) => ({
          ...prevScore,
          tie: prevScore.tie + 1,
        }));
      }

      return newBoard;
    });

    setPlayerTurn((prevTurn) => (prevTurn === X ? O : X));
  }

  function handleNewGame() {
    setGameBoard(INITIAL_GAMEBOARD);
    winnerRef.current = { winner: null, isDraw: false };
    setPlayerTurn(X);
  }

  function handleGameReset() {
    setGameBoard(INITIAL_GAMEBOARD);
    winnerRef.current = { winner: null, isDraw: false };
    setScores(INITIAL_SCORES);
    setPlayerTurn(X);
  }

  return (
    <>
      <main>
        <div id="players-container">
          <h2>PLAYERS</h2>
          <div id="players">
            <Player sign="X" name="player 1" playerScore={scores} />
            <Player sign="O" name="player 2" playerScore={scores} />
          </div>
        </div>
        <section id="main-container">
          <Scoreboard scores={scores} />
          <Gameboard gameBoard={gameBoard} onShowSymbol={handleShowSymbol} />
          <GameRestart
            turn={playerTurn === X ? "X" : "O"}
            onNewGame={handleNewGame}
            onGameReset={handleGameReset}
          />
        </section>
      </main>
    </>
  );
}

export default App;
