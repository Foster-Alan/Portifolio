// src/pages/Home.jsx
import React, { Component } from "react";
import "../Styles/Home.css";
import "../Styles/Card.css";
import sobremim from "../img/Exodia the forbidden developer.jpeg";
import projetos from "../img/Exodia the forbidden projects.jpeg";
import SkillsImg from "../img/Exodia the forbidden study.jpeg";
import Experiencia from "../img/Exodia the forbidden worker.jpeg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MatrixRain from "../components/MatrixRain";
import LanguageContext from "../context/LanguageContext";
import { translations } from "../translations";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      fullTexts: ["", ""],
      currentIndex: 0,
      typingSpeed: 70,
      deleting: false,
      finished: false,
    };
  }

  componentDidMount() {
    // pegar textos das traduções (usa contexto)
    const lang = this.context?.lang || "pt";
    const lines = translations[lang].home.lines;
    this.setState({ fullTexts: lines }, () => this.startTyping());
  }

  componentDidUpdate(prevProps, prevState) {
    // se idioma mudou, atualiza frases (evita reloop infinito)
    const lang = this.context?.lang || "pt";
    const lines = translations[lang].home.lines;
    if (lines.join("|") !== this.state.fullTexts.join("|")) {
      this.setState({
        fullTexts: lines,
        text: "",
        currentIndex: 0,
        deleting: false,
        finished: false
      }, () => this.startTyping());
    }
  }

  startTyping = () => {
    const { fullTexts, currentIndex, text, deleting, typingSpeed, finished } = this.state;
    if (finished || !fullTexts || fullTexts.length === 0) return;

    const currentText = fullTexts[currentIndex];
    let updatedText = deleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1);

    this.setState({ text: updatedText });

    let delay = deleting ? typingSpeed / 2 : typingSpeed;

    if (!deleting && updatedText === currentText) {
      if (currentIndex === fullTexts.length - 1) {
        this.setState({ finished: true });
        document.querySelector(".typing-text")?.classList.add("finished");
        return;
      }
      delay = 2000;
      this.setState({ deleting: true });
    } else if (deleting && updatedText === "") {
      this.setState({
        deleting: false,
        currentIndex: currentIndex + 1,
      });
      delay = 500;
    }

    setTimeout(this.startTyping, delay);
  };

  render() {
    const { text } = this.state;
    const cards = [
      { id: 1, link: "/about", image: sobremim },
      { id: 2, link: "/projects", image: projetos },
      { id: 3, link: "/skills", image: SkillsImg },
      { id: 4, link: "/exp", image: Experiencia },
    ];

    return (
      <div className="home-conteiner">
        <MatrixRain />
        <p className="typing-text">{text}</p>
        <section className="section-cards">
          {cards.map((card) => (
            <div key={card.id} className={`container div${card.id}`}>
              <div className="card">
                <div className="front"></div>
                <div className="back">
                  <Link to={card.link}>
                    <img src={card.image} alt={`Carta ${card.id}`} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

Home.contextType = LanguageContext;
