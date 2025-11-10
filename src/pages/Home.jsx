import React, { Component } from "react";
import "../Styles/Home.css";
import "../Styles/Card.css";

import sobremim from "../img/Exodia the forbidden developer.jpeg";
import projetos from "../img/Exodia the forbidden projects.jpeg";
import Skills from "../img/Exodia the forbidden study.jpeg";
import Experiencia from "../img/Exodia the forbidden worker.jpeg";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import MatrixRain from "../components/MatrixRain";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      fullTexts: [
        "Bem-vindo ao domínio do desenvolvedor proibido...",
        "Escolha sua carta e entre no sistema."
      ],
      currentIndex: 0,
      typingSpeed: 70,
      deleting: false,
      finished: false,
    };
  }

  componentDidMount() {
    this.startTyping();
  }

  startTyping = () => {
    const { fullTexts, currentIndex, text, deleting, typingSpeed, finished } = this.state;

    // Se já finalizou, para tudo
    if (finished) return;

    const currentText = fullTexts[currentIndex];
    let updatedText = deleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1);

    this.setState({ text: updatedText });

    let delay = deleting ? typingSpeed / 2 : typingSpeed;

    if (!deleting && updatedText === currentText) {
      // Pausa ao completar uma frase
      if (currentIndex === fullTexts.length - 1) {
        // Última frase — encerra animação
        this.setState({ finished: true });
        document.querySelector(".typing-text")?.classList.add("finished");
        return;
      }
      delay = 2000;
      this.setState({ deleting: true });
    } else if (deleting && updatedText === "") {
      // Passa para a próxima frase
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
      { id: 3, link: "/skills", image: Skills },
      { id: 4, link: "/exp", image: Experiencia },
    ];

    return (
      <div className="home-conteiner">
        <MatrixRain />

        {/* <h1 className="home-title">Escolha Uma Carta</h1> */}

        {/* Subtítulo digitado apenas uma vez */}
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
