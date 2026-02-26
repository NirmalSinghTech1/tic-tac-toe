import { useState } from "react";

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

const GAMEBOARD_SYMBOLS = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(GAMEBOARD_SYMBOLS);

  function handleShowSymbol(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const prevBoardCopy = [...prevGameBoard].map((cols) => [...cols]);

      prevBoardCopy[rowIndex][colIndex] = X;
      return prevBoardCopy;
    });
  }

  return (
    <section id="game-board">
      <div className="game-board-container">
        <ol className="rows">
          {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
              <ol className="columns">
                {row.map((col, colIndex) => (
                  <button
                    key={colIndex}
                    onClick={() => handleShowSymbol(rowIndex, colIndex)}
                  >
                    <li>{col}</li>
                  </button>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
