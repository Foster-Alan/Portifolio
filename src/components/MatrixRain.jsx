import React, { useEffect, useRef } from "react";
import "../Styles/MatrixRain.css";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    // =========================
    // 🎛️ CONTROLES (AJUSTE AQUI)
    // =========================

    const SYMBOL_SIZE = 15;     // tamanho dos símbolos (px)
    const SPEED = 1;            // velocidade de queda (1 = padrão atual)
    const SYMBOL_COLOR = "#FF8C00"; // cor dos símbolos

    // =========================
    // NÃO ALTERAR ABAIXO
    // =========================

    // Canvas em tela cheia
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // Alfabeto (símbolos egípcios)
    const matrix = [
      "𓇳","𓍯","𓊹","𓂀",
      "𓁹","𓁺",
      "𓆣","𓆓","𓆗",
      "𓅓","𓅱","𓅃","𓄿",
      "𓀀","𓀁","𓀂","𓁶","𓁷",
      "𓋹","𓋴","𓋻","𓌳","𓌷",
      "𓈖","𓈋","𓈗",
      "𓉔","𓉐","𓊖","𓊽","𓊪",
      "𓂝","𓂧","𓆑","𓎛","𓎝","𓏏","𓏤","𓐍"
    ];

    const fontSize = SYMBOL_SIZE;
    const columns = c.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = SYMBOL_COLOR;
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // velocidade controlada pela constante
        drops[i] += SPEED;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      c.height = window.innerHeight;
      c.width = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrixCanvas"
      style={{
        display: "block",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default MatrixRain;
