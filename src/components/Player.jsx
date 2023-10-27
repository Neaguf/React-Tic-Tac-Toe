import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input required value={name} />;
  }

  return (
    <li>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {playerName}
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
