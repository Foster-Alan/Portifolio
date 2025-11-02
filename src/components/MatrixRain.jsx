import React, { useEffect, useRef } from "react";
import "../Styles/MatrixRain.css";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    // Tornar o canvas do tamanho da tela
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    const matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(
        ""
      );

    const fontSize = 10;
    const columns = c.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#FF8C00"; // cor do texto
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    // Ajuste de tamanho da tela
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
        zIndex: -1, // Fica no fundo
        width: "100vw",
        height: "100vh",
      }}
    ></canvas>
  );
};

export default MatrixRain;
