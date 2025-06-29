import React, { useEffect, useRef } from "react";
import Background from "./Background";
import Characters from "./Characters";
import MessageWindow from "./MessageWindow";
import "./Game.css";

const Game = ({ scene }) => {
  const currentAudio = useRef(null);

  useEffect(() => {
    // 既存の音声があれば停止
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    // sceneとscene.audioが存在する場合にのみ、新しい音声を再生する
    if (scene && scene.audio) {
      const audio = new Audio(scene.audio);
      audio.play().catch((e) => console.error("Audio playback error:", e));
      currentAudio.current = audio;
    }

    // クリーンアップ関数
    return () => {
      if (currentAudio.current) {
        currentAudio.current.pause();
        currentAudio.current.currentTime = 0;
      }
    };
    // このeffectは `scene` に依存することを明記する
  }, [scene]);

  // 条件付きリターンはフックの後で行う
  if (!scene) {
    return <div>Loading...</div>;
  }

  // メインの描画ロジック
  return (
    <div className="game-container">
      <Background image={scene.background} />
      <Characters characters={scene.characters} speaker={scene.speaker} />
      <MessageWindow speaker={scene.speaker} text={scene.text} />
    </div>
  );
};

export default Game;
