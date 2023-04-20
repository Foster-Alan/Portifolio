import React, { Component } from 'react'
// import Header from './Header'
import '../Styles/Home.css';
import '../Styles/Card.css';
import sobremim from '../img/AlanFosterCard.jpeg'
import projetos from '../img/Projetos.jpeg'
import Skills from '../img/SkillsCard.jpeg'
import Experiência from '../img/Experiência.jpeg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    const cards = [
      { id: 1, link: '/about', image: sobremim },
      { id: 2, link: '/projects', image: projetos },
      { id: 3, link: '/skills', image: Skills },
      { id: 4, link: '/exp', image: Experiência }
    ];
    return (
        <div className="home-conteiner">
        {/* <Header /> */}
      <h1>Escolha Uma Carta</h1>
      <div className="all-Cards"> 
<section className="section-cards">
  {cards.map(card => (
    <div key={card.id} className={`container div${card.id}`}>
      <div className="card">
        <div className="front"></div>
        <div className="back">
          <Link to={card.link}><img alt={card.link} src={card.image}/></Link>
        </div>
      </div>
    </div>
  ))}
</section>
<Footer />
      </div>
      </div>
    )
  }
}
