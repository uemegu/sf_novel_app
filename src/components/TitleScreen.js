import React, { useEffect } from 'react';
import './TitleScreen.css';

const TitleScreen = ({ onStartGame }) => {
  useEffect(() => {
    // 星空の生成
    function createStars() {
      const starsContainer = document.getElementById("stars");
      if (!starsContainer) return;
      const numStars = 150;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.width = Math.random() * 3 + 1 + "px";
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + "s";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        starsContainer.appendChild(star);
      }
    }

    // 流れる粒子の生成
    function createParticles() {
      const particlesContainer = document.getElementById("particles");
      if (!particlesContainer) return;
      const numParticles = 50;

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 4 + 6 + "s";
        particlesContainer.appendChild(particle);
      }
    }

    createStars();
    createParticles();
  }, []);

  return (
    <div className="title-screen-container">
      {/* 星空背景 */}
      <div className="stars" id="stars"></div>

      {/* 流れる粒子 */}
      <div className="particles" id="particles"></div>

      {/* 装飾要素 */}
      <div className="ornament ornament-1"></div>
      <div className="ornament ornament-2"></div>

      {/* メインコンテンツ */}
      <div className="container">
        <h1 className="title">魂ってなんだろう？</h1>
        <button className="start-button" onClick={onStartGame}>ゲームスタート</button>
      </div>
    </div>
  );
};

export default TitleScreen;
