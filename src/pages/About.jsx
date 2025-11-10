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

export default function About() {
  const aboutSections = [
    {
      title: "Infância e Jogos",
      description:
        "Minha paixão por jogos começou cedo, acompanhando a evolução de cada novo lançamento e descobrindo o poder da criatividade digital.",
      image: infancia,
      icon: <FaGamepad />,
    },
    {
      title: "Primeiro Contato com Tecnologia",
      description:
        "Durante o ensino médio, conquistei uma nota excepcional no SPAECE e fui premiado com meu primeiro notebook — o início da minha jornada tecnológica.",
      image: note,
      icon: <FaLaptopCode />,
    },
    {
      title: "Dança e Expressão",
      description:
        "Atuei como instrutor e dançarino na Expressão de Rua Crew, explorando a arte do movimento e desenvolvendo minhas habilidades sociais e criativas.",
      image: test,
      icon: <FaUsers />,
    },
    {
      title: "Trybe",
      description:
        "Na Trybe, desenvolvi habilidades em programação web full stack, trabalhando com front-end, back-end e metodologias ágeis.",
      image: trybekit,
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Evolução Pessoal",
      description:
        "A união entre tecnologia e arte moldou minha visão: aprimorar sempre, seja em um código limpo ou em um movimento perfeito.",
      image: bboy,
      icon: <FaChild />,
    },
  ];

  return (
    <div className="about-conteiner">
      <Header />
      <h1 className="about-title">Sobre Mim</h1>
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
