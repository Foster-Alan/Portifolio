import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo01 from "../img/logo01.png";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/About", label: "Sobre" },
    { to: "/skills", label: "Skills" },
    { to: "/exp", label: "Experiência" },
    { to: "/Projects", label: "Projetos" },
  ];
  

  return (
    <header className="header">
      {/* ======= NAV DESKTOP ======= */}
      <nav className="header-container">
        <img src={logo01} alt="Logo Foster" className="logo" />
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${
                location.pathname === link.to ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="nav-highlight"></span>
        </div>
      </nav>

      {/* ======= NAV MOBILE ======= */}
      <div className="header-mobile">
        <div className="mobile-top">
          <img src={logo01} alt="Logo Foster" className="logo-mobile" />
          {menu ? (
            <AiOutlineClose
              size={25}
              className="btn-menu"
              onClick={() => setMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              size={25}
              className="btn-menu"
              onClick={() => setMenu(true)}
            />
          )}
        </div>

        {menu && (
          <div className="mobile-menu">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={() => setMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
