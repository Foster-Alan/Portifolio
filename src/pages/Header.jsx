// src/pages/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo01 from "../img/logo01.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].header;

  const links = [
    { to: "/", label: t.home },
    { to: "/About", label: t.about },
    { to: "/skills", label: t.skills },
    { to: "/exp", label: t.exp },
    { to: "/Projects", label: t.projects },
  ];

  return (
    <header className="header">
      {/* NAV DESKTOP */}
      <nav className="header-container">
        <img src={logo01} alt="Logo Foster" className="logo" />
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <span className="nav-highlight"></span>
          <button className="lang-btn" onClick={toggleLanguage}>
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>
      </nav>

      {/* NAV MOBILE */}
      <div className="header-mobile">
        <div className="mobile-top">
          <img src={logo01} alt="Logo Foster" className="logo-mobile" />
          <button className="lang-btn-mobile" onClick={toggleLanguage}>
            {lang === "pt" ? "EN" : "PT"}
          </button>
          {menu ? (
            <AiOutlineClose size={25} className="btn-menu" onClick={() => setMenu(false)} />
          ) : (
            <GiHamburgerMenu size={25} className="btn-menu" onClick={() => setMenu(true)} />
          )}
        </div>

        {menu && (
          <div className="mobile-menu">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link ${location.pathname === link.to ? "active" : ""}`}
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
