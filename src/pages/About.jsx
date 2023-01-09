import React, { Component } from 'react'
import Header from './Header'
import '../Styles/About.css';
import trybekit from '../img/trybekit.jpeg'
import bboy from '../img/bboy.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Sobre mim</h1>
        <div>
        <p>Nascido em São João de Meriti <br /> Porem moro no Céara desde os 7 anos de idade <br /> Apaixonado por raciocinio logico, jogos e dança.</p>
        </div>
        <div className="trybe">
        <p>Em Maio de 2022 <br /> Motivado pela paixão <br /> Por tecnologia <br /> Ingressei minha jornada <br /> Como desenvolvedor <br /> Full stack na Trybe <br /> Onde aprendi e deselvovi <br /> Minhas habilidades. </p>
        <img src={trybekit} width={200} alt="tribekit" />
        </div>
        </div>
    )
  }
}
