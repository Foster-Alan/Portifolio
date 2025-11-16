// src/pages/About.jsx
import React from 'react';
import Header from './Header';
import '../Styles/About.css';
import Footer from './Footer';
import trybekit from '../img/trybekit.jpeg';
import bboy from '../img/bboy.jpg';
import note from '../img/note.jpg';
import test from '../img/test.png';
import infancia from '../img/infancia.jpg';
import { FaGamepad, FaLaptopCode, FaUsers, FaChalkboardTeacher, FaChild } from 'react-icons/fa';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const images = [infancia, note, test, trybekit, bboy];
  const icons = [<FaGamepad />, <FaLaptopCode />, <FaUsers />, <FaChalkboardTeacher />, <FaChild />];

  const aboutSections = t.sections.map((item, i) => ({
    title: item.title,
    description: item.description,
    image: images[i],
    icon: icons[i],
  }));

  return (
    <div className="about-conteiner">
      <Header />
      <h1 className="about-title">{t.title}</h1>
      <div className="about-wrapper">
        {aboutSections.map((item, i) => (
          <div key={i} className="about-card">
            <div className="about-icon">{item.icon}</div>
            <img src={item.image} alt={item.title} className="about-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
