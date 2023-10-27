import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input required value={playerName} onChange={handleChange} />
    );
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(playerName);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {editablePlayerName}
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
