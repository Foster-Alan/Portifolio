import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "../Styles/Home.css";
import "../Styles/Card.css";
import sobremim from "../img/AlanFosterCard.jpeg";
import projetos from "../img/Projetos.jpeg";
import Experiência from "../img/Experiência.jpeg";
import pixelArt from '../img/PixelArtCard.jpeg'
import starwars from '../img/StarwarsPlanetsCard.jpeg'
import Trivia from '../img/TriviaCard.jpeg'
import trunfo from '../img/TrunfoCard.jpeg'
import wallet from '../img/WalletCard.jpeg'
import tunes from '../img/TunesCard.jpeg'
// import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Skills from "./Skills";
import Header from "./Header";
import About from "./About";
import Exp from "./Exp";

import "../Styles/Test.css";

export default function Test() {

  const cards = [
    { id: 1, link: "https://foster-pixel-art.netlify.app", image: pixelArt },
    { id: 2, link: "https://foster-trunfo.netlify.app", image: trunfo },
    { id: 3, link: "https://foster-wallet.netlify.app", image: wallet },
    { id: 4, link: "https://foster-tunes.netlify.app", image: tunes },
    { id: 4, link: "https://foster-starwars.netlify.app", image: starwars },
    { id: 4, link: "https://foster-trivia.netlify.app", image: Trivia },
  ];

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
      <div id="moveProject" className="test">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {cards.map((card) => (
              <motion.div className="item" key={card}>
                <a href={card.link} target="_blank">
                  <img src={card.image} alt={card.link} /> Ir ao projeto
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

  );
}
