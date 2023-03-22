import React, { Component } from 'react'
import Header from './Header'
import '../Styles/About.css';
import trybekit from '../img/trybekit.jpeg'
import bboy from '../img/bboy.jpg'
import note from '../img/note.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="about-conteiner">
        <Header />
        <h1>Sobre mim</h1>
        <div className="about">
   <div className="about-card">
        <p>Desde criança, eu sempre fui apaixonado por games<br />
        e ver como em cada game que era lançado uma ferramenta nova aparecia, <br />
        em um game era possível usar carros, <br /> no ano seguinte era possível ter barcos e explorar o mar, era algo incrível. <br /></p>
</div>

<div className="about-card">
<p>Mas o meu start veio efetivamente no ensino médio, <br />
onde na realização de uma prova estadual por atingir uma nota elevada <br />
eu fui contemplado com um notebook, e no ano seguinte outro <br /> e sinceramente eu não era bom com matemática ou português,<br />
mas usado apenas de lógica nas questões eu tinha conseguido,<br />
ali eu já tive indícios que o raciocínio logico era a minha praia. <br /> </p>
<img src={note} width={200} alt="bboy" />
</div>

<div className="about-card">
<p> Durante esse período eu conheci a dança, <br /> e na dança foi outra virada de chave <br />
onde eu pude aprimorar esse lado social <br /> e me mantive durante anos,<br /> atuando como instrutor<br /> de break dance ate vir a pandemia.</p>
<img src={bboy} width={200} alt="bboy" />
</div>

<div className="about-card"><p>Na pandemia ficou impossível atuar<br /> e foi onde eu conheci a Trybe<br />
na Trybe eu vi a oportunidade <br /> de reacender essa paixão por tecnologia <br />
e acabei percebendo durante o curso<br /> que em muitos aspectos <br /> 
a programação se conectava com a dança.<br /> </p>
<img src={trybekit} width={200} alt="tribekit" />
</div>
<div className="about-card">
<p>
Na dança eu não preciso mover o braço<br />para que certo movimento com as pernas seja efetivo,<br /> mas fica bonito, mais atrativo, <br /> assim como eu não preciso em uma aplicação de login,<br /> escrever com um placeholder "digite sua senha"<br /> para que meu código seja funcione,<br /> mas em ambos os casos você busca desenvolver o seu melhor.</p>
</div>
        
        </div>
        </div>
    )
  }
}
