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
    const aboutMe = [["Dofus, um Rpg tatico de turnos", [infancia]], 
    ["SPAECE, primeiro notebook", [note]], 
    ["Expressão de rua Crew, Equipe de dança", [test]], 
    ["Trybe, escola de programação", [trybekit]], 
    ["Foster, freeze (Movimento de breakdance)", [bboy]]]
    return (
      <div className="about-conteiner">
        <Header />
        <h1>Sobre mim</h1>
        <p>Desde a infância, minha paixão por jogos sempre cresceu ao testemunhar a evolução constante de cada lançamento <br /> Cada novo jogo introduzia ferramentas inovadoras, como a capacidade de dirigir carros em um ano e explorar mares de barco no próximo, era uma progressão emocionante e surpreendente. 
    <br /> Minha jornada decolou durante o ensino médio, quando a conquista de uma nota excepcional em um exame estadual me rendeu um presente valioso: um notebook. Esse marco abriu as portas para oportunidades ainda maiores, já que no ano seguinte fui agraciado com outro notebook"
    No ensino médio, fui apresentado à dança, o que se revelou uma virada de chave para o desenvolvimento das minhas habilidades sociais. <br /> Atuei como instrutor de break dance por anos, até a chegada da pandemia.
    <br /> Com a pandemia, minha atuação na dança foi interrompida, levando-me a descobrir a Trybe. Nela, enxerguei a chance de reacender minha paixão pela tecnologia e percebi, ao longo do curso, que a programação se conectava de diversas maneiras com a dança.
    <br /> Na dança, certos movimentos das pernas podem ser eficazes mesmo sem movimentar os braços, embora adicionar essa dimensão seja atrativo. Da mesma forma, em uma tela de login, não é estritamente necessário incluir 'insira sua senha' para que o código funcione, mas em ambos os casos, busco aprimorar minha performance ao máximo."</p>
        <div className="about-cards">
          {aboutMe.map((about) => (
              <div className="image-container">
              <img src={about[1]} alt="" />
              <p className="image-text">{about[0]}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}
