export default function GameRestart({ turn }) {
  return (
    <div id="game-restart-container">
      <span className="turn-indicator">{turn}'s turn</span>
      <button className="btn-new-game">New Game</button>
      <button className="btn-reset-all">Reset All</button>
    </div>
  );
}
