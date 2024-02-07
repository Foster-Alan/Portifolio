import React, { Component } from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import '../Styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-conteiner'>
          <h2>OUTRAS REDES</h2>
        <div id='moveFooter' className='icons-conteiner'>
        <a className='icons' href="https://www.linkedin.com/in/foster-/" target="blank"><BsLinkedin /></a>
        <a className='icons' href="https://github.com/Foster-Alan" target="blank"><BsGithub /></a>
        </div>
        <p> © Alan Foster. Todos os direitos reservados</p>
        </div>
    )
  }
}
