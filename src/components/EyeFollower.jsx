import React, { useState, useEffect } from "react";
import "../Styles/EyeFollower.css";

const EyeFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eye-container">
      <div className="eye horus-eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${(position.x - window.innerWidth / 2) / 30}px, ${(position.y - window.innerHeight / 2) / 30}px)`
          }}
        ></div>
      </div>
      <div className="horus-decoration"></div>
    </div>
  );
};

export default EyeFollower;