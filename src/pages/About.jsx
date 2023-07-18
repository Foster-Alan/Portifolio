import React, { Component } from 'react'
import Header from './Header'
import '../Styles/About.css';
import trybekit from '../img/trybekit.jpeg'
import bboy from '../img/bboy.jpg'
import note from '../img/note.jpg'
import test from '../img/test.png'
import infancia from '../img/infancia.jpg'
import "react-multi-carousel/lib/styles.css";
import Footer from './Footer';

export default class About extends Component {
  render() {
    const aboutMe = [["Desde criança, eu sempre fui apaixonado por game e ver como em cada game que era lançado uma ferramenta nova aparecia, em um game era possível usar carros, no ano seguinte era possível ter barcos e explorar o mar, era algo incrível.", [infancia]], 
    ["O meu start veio efetivamente no ensino médio, onde na realização de uma prova estadual por atingir uma nota elevada eu fui contemplado com um notebook, e no ano seguinte outro.", [note]], 
    ["No ensino médio eu conheci a dança, e na dança foi outra virada de chave onde eu pude aprimorar esse lado social e me mantive durante anos atuando como instrutor de break dance ate vir a pandemia.", [test]], 
    ["Na pandemia ficou impossível atuar e foi onde eu conheci a Trybe onde eu vi a oportunidade de reacender essa paixão por tecnologia e acabei percebendo durante o curso que em muitos aspectos a programação se conectava com a dança.", [trybekit]], 
    ["Na dança eu não preciso mover o braço para que certo movimento com as pernas seja efetivo, mas fica atrativo, assim como eu não preciso em uma aplicação de login escrever 'digite sua senha' para que meu código funcione mas em ambos os casos eu busco desenvolver o meu melhor.", [bboy]]]
    return (
      <div className="about-conteiner">
        <Header />
        <h1>Sobre mim</h1>
        <div className="about-cards">
          {aboutMe.map((about) => (
              <div className="image-container">
              <img src={about[1]} alt="" />
              <p className="image-text">{about[0]}</p>
            </div>
          ))}
        </div>
        {/* <div className="aboutMe__conteiner">
          {aboutMe.map((about) => (
            <div className="about__card">
              <div className="divImg">
              <img src={about[1]} alt="" />
              </div>
              <p>{about[0]}</p>
            </div>
          ))}
        </div> */}
        <Footer />
      </div>
    )
  }
}
