import React, { Component } from 'react'
import '../Styles/Header.css';

import bboy from '../img/bboy.jpg'



export default class Home extends Component {
  render() {
    return (
        <div className="start">
            <h1>Oi, eu sou o Foster. <br /> Sou desenvolvedor <b>Front End</b></h1>
            <img src={bboy} alt="" />
      
      </div>
    )
  }
}