import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiSave3Fill } from "react-icons/ri";

export default function Player({ sign, name, playerScore }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  console.log(playerScore)
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setIsEditing((prev) => {
      if (prev === true) {
        playerName === "" && setPlayerName(name);
      }

      return !prev;
    });
  }

  return (
    <div className={`player-${sign}`}>
      <span className="player-sign">{sign}</span>
      <div className="player-name-section">
        {isEditing ? (
          <input type="text" onChange={handleNameChange} value={playerName} />
        ) : (
          <p>{playerName}</p>
        )}
        <button className="name-edit-button" onClick={handleClick}>
          {isEditing ? (
            <RiSave3Fill className="name-edit-icon" />
          ) : (
            <FaEdit className="name-edit-icon" />
          )}
        </button>
      </div>
      <p className="score">{sign === 'X' ? playerScore.X : playerScore.O}</p>
    </div>
  );
}
