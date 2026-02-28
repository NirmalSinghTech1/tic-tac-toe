export default function Gameboard({ gameBoard, onShowSymbol }) {

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
                    onClick={() => onShowSymbol(rowIndex, colIndex)}
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
