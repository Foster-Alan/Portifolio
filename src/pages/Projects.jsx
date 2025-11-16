// { href: "https://foster-trunfo.netlify.app", src: trunfo, title: "Trunfo" },
    // { href: "https://foster-wallet.netlify.app", src: wallet, title: "Wallet" },
    // { href: "https://foster-tunes.netlify.app", src: tunes, title: "Tunes" },

// src/pages/Projects.jsx
import React from 'react';
import Header from './Header';
import '../Styles/Projects.css';
import Footer from './Footer';
import pixelArt from '../img/PixelArtCard.jpeg';
import starwars from '../img/StarwarsPlanetsCard.jpeg';
import Trivia from '../img/TriviaCard.jpeg';
import Mylist from '../img/My List.jpeg';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = [
    { href: "https://foster-pixel-art.netlify.app", src: pixelArt, title: "Pixel Art" },
    { href: "https://star-wars-red-phi.vercel.app", src: starwars, title: "Star Wars Planets" },
    { href: "https://foster-trivia.netlify.app", src: Trivia, title: "Trivia" },
    { href: "https://my-list-blond.vercel.app", src: Mylist, title: "My List" },
  ];

  return (
    <div className="projects-page">
      <Header />
      <h1 className="projects-title">{t.title}</h1>
      <p className="projects-subtitle">{t.subtitle}</p>

      <div className="projects-gallery">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.href}
            target="_blank"
            rel="noreferrer"
            className="project-item"
          >
            <img src={proj.src} alt={proj.title} className="project-image" />
            <h3 className="project-name">{proj.title}</h3>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}
