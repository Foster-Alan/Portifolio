import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import logo03 from "../img/logo03.png";

export default function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <header>
      <nav className="header-conteiner">
        <img src={logo03} alt="Logo Foster" />
        <a href="#moveAbout">Sobre</a>
        <a href="#moveSkills">Skills</a>
        <a href="#moveProject">Projetos</a>
        <a href="#moveExp">Experiência</a>
        {/* <Link to="/">Início</Link> */}
        {/* <Link to="/About">Sobre</Link> */}
        {/* <Link to="/skills">Skills</Link> */}
        {/* <Link to="/exp">Experiência</Link> */}
        {/* <Link to="/Projects">Projetos</Link> */}

        <div class="dot"></div>
      </nav>
      <div className="header-mobile">
        {menu ? (
          <div>
            <img src={logo03} alt="Logo Foster" />
            <GiHamburgerMenu
              size={25}
              className="btn-menu"
              onClick={() => setMenu(!menu)}
            />
          </div>
        ) : (
          <AiOutlineClose
            size={25}
            className="btn-menu"
            onClick={() => setMenu(!menu)}
          />
        )}
        {!menu && (
          <div className="header-links">
            <a href="#moveExp">Experiência</a>
            <a href="#moveProject">Projetos</a>
            <a href="#moveSkills">Skills</a>
            <a href="#moveAbout">Sobre</a>

            {/* <Link to="/">Principal</Link>
              <Link to="/About">Sobre Mim</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/exp">Experiencia</Link>
              <Link to="/Projects">Projetos</Link> */}
          </div>
        )}
      </div>
    </header>
  );
}
