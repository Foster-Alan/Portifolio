// src/pages/Exp.jsx
import React from 'react';
import Header from './Header';
import '../Styles/Exp.css';
import Footer from './Footer';
import { FaUserTie, FaCode, FaPeopleCarry } from 'react-icons/fa';
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Exp() {
  const { lang } = useLanguage();
  const t = translations[lang].exp;

  // Descrições separadas e SEM ternários complexos
  const ptDescriptions = [
    "Atuação no setor de prevenção a fraudes e análise de risco transacional. Responsável por identificar padrões suspeitos, mitigar riscos e oferecer suporte técnico especializado aos clientes, garantindo segurança e eficiência na operação.",
    "Formação com mais de 1.500 horas práticas, abordando front-end, back-end, ciência da computação, metodologias ágeis e soft skills. Desenvolvimento de projetos completos com foco em trabalho colaborativo e boas práticas.",
    "Planejamento e condução de aulas teóricas e práticas de Break Dance, aplicando técnicas de improvisação, criação coreográfica e análise de movimento artístico."
  ];

  const enDescriptions = [
    "Worked in fraud prevention and transactional risk analysis. Responsible for identifying suspicious patterns, mitigating risks, and providing specialized technical support to customers, ensuring secure and efficient operations.",
    "Training with over 1,500 practical hours covering front-end, back-end, computer science, agile methodologies, and soft skills. Developed complete projects with focus on collaboration and best practices.",
    "Planned and taught theoretical and practical Break Dance classes, using improvisation techniques, choreography creation, and artistic movement analysis."
  ];

  const descriptions = lang === "pt" ? ptDescriptions : enDescriptions;

  const icons = [<FaUserTie />, <FaCode />, <FaPeopleCarry />];

  const experiences = t.experiences.map((item, i) => ({
    ...item,
    description: descriptions[i],
    icon: icons[i]
  }));

  return (
    <div className="exp-conteiner">
      <Header />
      <h1 className="exp-title">{t.title}</h1>

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
