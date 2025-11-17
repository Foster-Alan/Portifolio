// src/pages/Skills.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../Styles/Skills.css';
import Footer from './Footer';

import {
  IoLogoNodejs,
  IoLogoCss3
} from 'react-icons/io';
import {
  GrReactjs,
  GrDocker
} from 'react-icons/gr';
import {
  DiJavascript,
  DiGit
} from 'react-icons/di';
import {
  SiRedux,
  SiTestinglibrary,
  SiTypescript,
  SiMongodb,
  SiJest
} from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaPython } from 'react-icons/fa';

import htmlimage from '../img/html.png';
import cssImg from '../img/css.png';
import javascriptImg from '../img/javaScript.png';
import gitImg from '../img/git.png';
import nodejsImg from '../img/nodejs.png';
import mongImg from '../img/mong.png';
import dockerImg from '../img/docker.png';
import PythonImg from '../img/Python.png';
import reactImg from '../img/react.png';
import reduxImg from '../img/redux.png';
import typescriptImg from '../img/type.png';
import sqlImg from '../img/sql.png';
import JestImg from '../img/Jest.png';
import testingImg from '../img/testing.png';

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Skills() {

  const { lang } = useLanguage();
  const t = translations[lang].skillsDescriptions;

  // 🔥 Agora salvamos a SKILL ATIVA, não o texto/imagem
  const [activeSkill, setActiveSkill] = useState("html");

  // Lista única de skills
  const skills = [
    { icon: <ImHtmlFive />, key: 'html', label: 'HTML', img: htmlimage },
    { icon: <IoLogoCss3 />, key: 'css', label: 'CSS', img: cssImg },
    { icon: <DiJavascript />, key: 'javascript', label: 'JavaScript', img: javascriptImg },
    { icon: <SiTypescript />, key: 'typescript', label: 'TypeScript', img: typescriptImg },
    { icon: <FaPython />, key: 'python', label: 'Python', img: PythonImg },
    { icon: <IoLogoNodejs />, key: 'node', label: 'Node.js', img: nodejsImg },
    { icon: <GrReactjs />, key: 'react', label: 'React', img: reactImg },
    { icon: <SiRedux />, key: 'redux', label: 'Redux', img: reduxImg },
    { icon: <GrDocker />, key: 'docker', label: 'Docker', img: dockerImg },
    { icon: <SiTestinglibrary />, key: 'testingLibrary', label: 'Testing Library', img: testingImg },
    { icon: <SiJest />, key: 'jest', label: 'Jest', img: JestImg },
    { icon: <DiGit />, key: 'git', label: 'Git', img: gitImg },
    { icon: <AiOutlineConsoleSql />, key: 'sql', label: 'SQL', img: sqlImg },
    { icon: <SiMongodb />, key: 'mongodb', label: 'MongoDB', img: mongImg },
  ];

  // Skill ativa inteira
  const selected = skills.find((s) => s.key === activeSkill);

  return (
    <div className="skills-page">
      <Header />
      <h1 className="skills-title">{translations[lang].skills.title}</h1>

      <div className="skills-wrapper">

        {/* grid dos ícones */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill.key}
              className={`skill-card ${skill.key === activeSkill ? "active-skill" : ""}`}
              onClick={() => setActiveSkill(skill.key)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.label}</p>
            </div>
          ))}
        </div>

        {/* painel da skill selecionada */}
        <div className="skills-display">
          <img src={selected.img} alt={selected.label} className="skills-image" />
          <div className="skills-text">{t[selected.key]}</div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
