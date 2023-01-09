import React, { Component } from 'react'
// import Header from './Header'
import '../Styles/Home.css';
import '../Styles/Card.css';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import sobremim from '../img/AlanFosterCard.jpeg'
import projetos from '../img/Projetos.jpeg'
import Skills from '../img/SkillsCard.jpeg'
import Curiosidades from '../img/Curiosidades.jpeg'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home-conteiner">
        {/* <Header /> */}
      <h1>Escolha Uma Carta</h1>
      <div className="all-Cards">
      <section className="section-cards">
    <div class="container div1">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/about"><img alt="Sobre mim" src={sobremim}/></Link>
     
    </div>
  </div>
</div>

<div class="container div2">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/projects"><img alt='Projetos' src={projetos}/></Link>
    </div>
  </div>
</div>

<div class="container div3">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/skills"><img alt='Skills' src={Skills}/></Link>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/Curiosidades"><img alt='Curiosidades' src={Curiosidades}/></Link>
    </div>
  </div>
</div>

</section>
<div className='icons-conteiner'>
      <a className='icons' href="https://www.linkedin.com/in/foster-/" target="blank"><BsLinkedin /></a>
      <a className='icons' href="https://github.com/Foster-Alan" target="blank"><BsGithub /></a>
      </div>
      </div>
      </div>
    )
  }
}
