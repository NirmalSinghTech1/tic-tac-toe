export default function GameRestart({ turn, onNewGame, onGameReset }) {
  return (
    <div id="game-restart-container">
      <span className="turn-indicator">{turn}'s turn</span>
      <button className="btn-new-game" onClick={onNewGame} >New Game</button>
      <button className="btn-reset-all" onClick={onGameReset}>Reset All</button>
    </div>
  );
}
