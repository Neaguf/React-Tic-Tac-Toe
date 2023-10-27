import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activPlayer, setActivPlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivPlayer((prevState) => (prevState === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let curentPlayer = "X";
      if (prevTurns.length > 0 && prev[0].player === "X") {
        curentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Florin"
            symbol="x"
            isActive={activPlayer === "X"}
          />
          <Player
            initialName="Neagu"
            symbol="0"
            isActive={activPlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activPlayerSymbol={activPlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
