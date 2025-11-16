import React from 'react';
import Header from './Header';
import '../Styles/Exp.css';
import Footer from './Footer';
import { FaUserTie, FaCode, FaPeopleCarry } from 'react-icons/fa';

export default function Exp() {
  const experiences = [
    {
      company: "CloudWalk",
      role: "Analista de Risco e Customer Support",
      description:
        "Atuação no setor de prevenção a fraudes e análise de risco transacional. Responsável por identificar padrões suspeitos, mitigar riscos e oferecer suporte técnico especializado aos clientes, garantindo segurança e eficiência na operação.",
      icon: <FaUserTie />,
      period: "2023 - Atual",
    },
    {
      company: "Trybe",
      role: "Desenvolvimento Web",
      description:
        "Formação com mais de 1.500 horas práticas, abordando front-end, back-end, ciência da computação, metodologias ágeis e soft skills. Desenvolvimento de projetos completos com foco em trabalho colaborativo e boas práticas.",
      icon: <FaCode />,
      period: "2022 - 2023",
    },
    {
      company: "Ponto de Cultura",
      role: "Instrutor de Danças Urbanas",
      description:
        "Planejamento e condução de aulas teóricas e práticas de Break Dance, aplicando técnicas de improvisação, criação coreográfica e análise de movimento artístico.",
      icon: <FaPeopleCarry />,
      period: "2015 - 2020",
    },
  ];

  return (
    <div className="exp-conteiner">
      <Header />
      <h1 className="exp-title">Experiências Profissionais</h1>
      <div className="exp-wrapper">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-icon">{exp.icon}</div>
            <h2>{exp.company}</h2>
            <h3>{exp.role}</h3>
            <p>{exp.description}</p>
            <span className="exp-period">{exp.period}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
