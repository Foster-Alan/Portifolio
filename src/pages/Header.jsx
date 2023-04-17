import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <header>
      <nav className="header-conteiner">
       
        <Link to="/">Home</Link>
        <Link to="/About">Sobre Mim</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/exp">Experiência</Link>
        <Link to="/Projects">Projetos</Link>
      
        <div class="dot"></div>
      </nav>
      <div className="header-mobile">
        {menu ? (
          <GiHamburgerMenu size={25}
            className="btn-menu"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <AiOutlineClose size={25} className="btn-menu" onClick={() => setMenu(!menu)} />
        )}
          {!menu && (
        <div className="header-links">
            
              <Link to="/">Principal</Link>
              <Link to="/About">Sobre Mim</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/exp">Experiencia</Link>
              <Link to="/Projects">Projetos</Link>
        </div>
            
          )}
      </div>
    </header>
  );
}
