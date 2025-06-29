import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import TitleScreen from "./components/TitleScreen";
import scenario from "./scenario/scenario.json";

function App() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [bgm, setBgm] = useState(null);

  useEffect(() => {
    if (!bgm) {
      const audio = new Audio("/bgm/bgm.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      setBgm(audio);
    }

    if (gameStarted) {
      bgm?.play().catch((e) => console.error("BGM playback error:", e));
    } else {
      bgm?.pause();
      if (bgm) {
        bgm.currentTime = 0;
      }
    }
  }, [gameStarted, bgm]);

  const handleScreenClick = () => {
    if (gameStarted && sceneIndex < scenario.length - 1) {
      setSceneIndex(sceneIndex + 1);
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App" onClick={handleScreenClick}>
      {!gameStarted ? (
        <TitleScreen onStartGame={startGame} />
      ) : (
        <Game scene={scenario[sceneIndex]} />
      )}
    </div>
  );
}

export default App;
