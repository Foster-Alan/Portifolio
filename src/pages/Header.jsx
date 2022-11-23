import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Principal</Link>
        <Link to="/About">Sobre Mim</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/Projects">Projetos</Link>
      </header>
    )
  }
}
