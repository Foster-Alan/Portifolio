import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logo01 from '../img/logo01.png'

export default function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <header>
      <nav className="header-conteiner">

        <img src={logo01} alt="Logo Foster" />
        <Link to="/">Início</Link>
        <Link to="/About">Sobre</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/exp">Experiência</Link>
        <Link to="/Projects">Projetos</Link>
      
        <div class="dot"></div>
      </nav>
      <div className="header-mobile">
        {menu ? (
          <div>
          <img src={logo01} alt="Logo Foster" />
          <GiHamburgerMenu size={25}
            className="btn-menu"
            onClick={() => setMenu(!menu)}
          />
          </div>
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
