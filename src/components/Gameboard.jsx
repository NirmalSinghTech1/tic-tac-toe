import { useState } from "react";
import WINNING_COMBINATIONS from "../WinningCombinations";

const GAMEBOARD_SYMBOLS = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ playerTurn, onPlayerTurn }) {
  const [gameBoard, setGameBoard] = useState(GAMEBOARD_SYMBOLS);

  console.log(gameBoard);
  function handleShowSymbol(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const prevBoardCopy = [...prevGameBoard].map((cols) => [...cols]);

      prevBoardCopy[rowIndex][colIndex] = playerTurn;
      return prevBoardCopy;
    });

    onPlayerTurn();
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
                    disabled={col !== null}
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
