import React, { Component } from 'react'
import Header from './Header'
import '../Styles/About.css';
import trybekit from '../img/trybekit.jpeg'

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Sobre mim</h1>
        <div className="trybe">
   
        <p>Desde criança, eu sempre fui apaixonado por games <br />
e ver como em cada game que era lançado uma ferramenta nova aparecia, <br />
em um game era possivel usar carros, <br /> no ano seguinte era possivel ter barcos
e explorar o mar, era algo incrivel. <br /></p>

<p>Mas o meu start veio efetivamente no ensino medio, <br />
onde na realização de uma prova estadual por atingir uma nota elevada <br />
eu fui contemplado com um notebook, e no ano seguinte outro <br /> e sinceramente eu não era bom com matematica ou portugues <br />
Mas usado apenas de logica nas questoes eu tinha conseguido,<br />
ali eu ja tive indicios que o raciocinio logico era a minha praia. <br /> </p>

<p> Durante esse periodo eu conheci a dança, <br /> e na dança que foi outra virada de chave <br />
onde eu pude aprimorar esse lado social <br /> e me mantive
durante anos,<br /> atuando como instrutor de break dance ate vir a pademia</p>

<div className="trybe1"><p>na pandemia ficou impossivel atuar <br /> e foi onde eu conheci a trybe <br />
na trybe eu vi a oportunidade <br /> de reeacender essa paixao por tecnologia <br />
e acabei percebendo durante o curso <br /> que em muitos aspectos <br /> 
a programação se conectava com a dança: <br /> </p>
<img src={trybekit} width={200} alt="tribekit" />
</div>
<p>
Na dança eu não preciso mover o braço <br /> pra que certo movimento com as pernas
seja efetivo, <br /> mas fica bonito, mais atrativo, <br /> assim como eu não preciso
em uma aplicação de login, <br /> escrever com um
placeholder "digite sua senha" <br /> para que meu codigo seja funcione, <br /> mas em ambos os casos
voce busca desenvolver o seu melhor.</p>
        
        </div>
        </div>
    )
  }
}
