import { useState } from "react";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Florin" symbol="x" />
          <Player name="Neagu" symbol="0" />
        </ol>
        Game board
      </div>
    </main>
  );
}

export default App;
