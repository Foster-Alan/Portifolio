import React from 'react'
import Header from './Header'
import '../Styles/About.css';
import bboy from '../img/bboy.jpg'

export default function Curiosidades() {
  return (
    <div>
        <Header />
         <h1>Curiosidades</h1>
        <div className="trybe">
          <p>Danço break dance <br /> Desde 2010 <br /> No grupo <br/> Expressao de Rua <br /> Onde ja atuei <br /> Como instrutor.</p>
        <img src={bboy} width={200} alt="bboy" />
        </div>
    </div>
  )
}
