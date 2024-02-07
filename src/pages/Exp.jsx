import React from 'react'
// import Header from './Header'
import '../Styles/About.css';
import '../Styles/Exp.css';
// import Footer from './Footer';
import bboy from '../img/bboy.jpg'
import trybe from '../img/trybekit.jpeg'

export default function Exp() {
  return (
    <div id="moveExp" className="exp-conteiner">
        {/* <Header /> */}
      <h1>Experiencia</h1>
      <div className="exp-flex">
         <div className="exp">
          <h2>Ponto de Cultura</h2>
          <h3>Instrutor de danças urbanas</h3>
          <p>Ministrar e planejarar aulas teóricas e práticas de Break Dance, 
            <br /> aplicar técnicas de improvisação, 
            criação, composição e análise do movimento.
</p>
<img src={bboy} alt="" />  
</div>
         <div className="exp">
          <img src={trybe} alt="" />
          <h2>Trybe</h2>
          <h3>Desenvolvimento Web</h3>
          <p>O programa conta com mais de 1.500 horas de aulas e aborda desenvolvimento de software,<br /> front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.</p>
          </div>
         </div>

        </div>
    
  )
}
