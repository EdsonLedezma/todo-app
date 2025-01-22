"use client"

import React from "react"

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="gradient gradient1"></div>
      <div className="gradient gradient2"></div>
      <div className="gradient gradient3"></div>
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
      <style jsx>{`
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background-color: #f0f4f8;
        }
        .gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.7;
          mix-blend-mode: overlay;
          transition: all 10s ease-in-out;
        }
        .gradient1 {
          background: linear-gradient(45deg, #a8e6cf, #dcedc1);
          animation: moveGradient1 15s infinite alternate;
        }
        .gradient2 {
          background: linear-gradient(-45deg, #ffd3b6, #ffaaa5);
          animation: moveGradient2 20s infinite alternate;
        }
        .gradient3 {
          background: linear-gradient(90deg, #d9e3f0, #f3e7e9);
          animation: moveGradient3 25s infinite alternate;
        }
        .floating-shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(5px);
        }
        .shape1 {
          width: 300px;
          height: 300px;
          top: -150px;
          left: -150px;
          animation: floatShape1 30s infinite ease-in-out;
        }
        .shape2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          right: -100px;
          animation: floatShape2 25s infinite ease-in-out;
        }
        .shape3 {
          width: 150px;
          height: 150px;
          top: 50%;
          left: 50%;
          animation: floatShape3 20s infinite ease-in-out;
        }
        @keyframes moveGradient1 {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          100% { transform: translateX(50%) translateY(50%) rotate(360deg); }
        }
        @keyframes moveGradient2 {
          0% { transform: translateX(50%) translateY(50%) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(-360deg); }
        }
        @keyframes moveGradient3 {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
        @keyframes floatShape1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(100px, 100px); }
        }
        @keyframes floatShape2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -100px); }
        }
        @keyframes floatShape3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.5); }
        }
      `}</style>
    </div>
  )
}

export default AnimatedBackground

