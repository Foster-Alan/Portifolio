import React, { Component } from 'react'
// import Header from './Header'
import '../Styles/Home.css';
import '../Styles/Card.css';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import sobremim from '../img/SobreMim.jpeg'
import projetos from '../img/Projetos.jpeg'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home-conteiner">
        {/* <Header /> */}
      <h1>Pagina principal</h1>
      {/* <img className="imgprofile" src='https://media-exp1.licdn.com/dms/image/C4D03AQENVF81QyZUrw/profile-displayphoto-shrink_800_800/0/1660755467136?e=1669852800&v=beta&t=fOzqgzWl6FYRDhqH7fJHxGWVfVlKVDQ1iGzIywr4dRA' width="300px" alt="foster" /> */}
      <section className="section-cards">
    <div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/about"><img alt="Sobre mim" src={sobremim}/></Link>
     
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
    <Link to="/projects"><img alt='Projetos' src={projetos}/></Link>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
      <img alt="test" src="https://i.ytimg.com/vi/WZIGwN-5Ioo/maxresdefault.jpg"/>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
      <img alt='Test' src="https://i.ytimg.com/vi/WZIGwN-5Ioo/maxresdefault.jpg"/>
    </div>
  </div>
</div>

</section>
<div className='icons-conteiner'>
      <a className='icons' href="https://www.linkedin.com/in/foster-/" target="blank"><BsLinkedin /></a>
      <a className='icons' href="https://github.com/Foster-Alan" target="blank"><BsGithub /></a>
      </div>
      </div>
    )
  }
}
