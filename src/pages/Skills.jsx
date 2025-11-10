import React, { useState } from 'react';
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

// Imagens
import htmlimage from '../img/html.png';
import css from '../img/css.png';
import javascript from '../img/javaScript.png';
import git from '../img/git.png';
import nodejs from '../img/nodejs.png';
import mong from '../img/mong.png';
import docker from '../img/docker.png';
import Python from '../img/Python.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import typescript from '../img/type.png';
import sql from '../img/sql.png';
import Jest from '../img/Jest.png';
import testing from '../img/testing.png';

export default function Skills() {
  const [currentImage, setCurrentImage] = useState(htmlimage);
  const [imageText, setImageText] = useState(
    'HTML (Hypertext Markup Language). É a linguagem de marcação utilizada para criar a estrutura e o conteúdo básico de páginas da web.'
  );

  const skills = [
    { icon: <ImHtmlFive />, label: 'HTML', img: htmlimage, desc: 'HTML (Hypertext Markup Language). É a linguagem de marcação utilizada para criar a estrutura e o conteúdo básico de páginas da web.' },
    { icon: <IoLogoCss3 />, label: 'CSS', img: css, desc: 'CSS (Cascading Style Sheets). Controla o estilo e layout visual das páginas.' },
    { icon: <DiJavascript />, label: 'JavaScript', img: javascript, desc: 'JavaScript adiciona interatividade e comportamento dinâmico às páginas web.' },
    { icon: <SiTypescript />, label: 'TypeScript', img: typescript, desc: 'TypeScript adiciona tipagem estática e segurança ao JavaScript.' },
    { icon: <FaPython />, label: 'Python', img: Python, desc: 'Python é uma linguagem versátil e legível, usada em web, ciência de dados e automação.' },
    { icon: <IoLogoNodejs />, label: 'Node.js', img: nodejs, desc: 'Node.js permite executar JavaScript no lado do servidor.' },
    { icon: <GrReactjs />, label: 'React', img: react, desc: 'React é uma biblioteca JavaScript para criar interfaces de usuário reativas.' },
    { icon: <SiRedux />, label: 'Redux', img: redux, desc: 'Redux gerencia o estado global de aplicações React.' },
    { icon: <GrDocker />, label: 'Docker', img: docker, desc: 'Docker cria e executa aplicativos em contêineres isolados.' },
    { icon: <SiTestinglibrary />, label: 'Testing Library', img: testing, desc: 'Testing Library foca em testes baseados no comportamento do usuário.' },
    { icon: <SiJest />, label: 'Jest', img: Jest, desc: 'Jest é um framework de testes JavaScript rápido e simples.' },
    { icon: <DiGit />, label: 'Git', img: git, desc: 'Git é um sistema de controle de versão distribuído amplamente usado.' },
    { icon: <AiOutlineConsoleSql />, label: 'SQL', img: sql, desc: 'SQL é uma linguagem para gerenciar e consultar bancos de dados relacionais.' },
    { icon: <SiMongodb />, label: 'MongoDB', img: mong, desc: 'MongoDB é um banco de dados NoSQL orientado a documentos.' },
  ];

  const handleChange = (img, desc) => {
    setCurrentImage(img);
    setImageText(desc);
  };

  return (
    <div className="skills-page">
      <Header />
      <h1 className="skills-title">Skills</h1>
      <div className="skills-wrapper">
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skill-card"
              onClick={() => handleChange(skill.img, skill.desc)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.label}</p>
            </div>
          ))}
        </div>

        <div className="skills-display">
          <img src={currentImage} alt="Skill" className="skills-image" />
          <div className="skills-text">{imageText}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
