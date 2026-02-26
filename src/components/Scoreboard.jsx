import { HiOutlineTrophy } from "react-icons/hi2";

export default function Scoreboard() {
  return (
    <div id="scoreboard">
      <h3>
        <span>
          <HiOutlineTrophy style={{ color: "yellow", fontSize: "1.5rem" }} />
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
  );
}
