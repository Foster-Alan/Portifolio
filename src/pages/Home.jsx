import React, { Component } from 'react'
import Header from './Header'
import '../Styles/Home.css';
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default class Home extends Component {
  render() {
    return (
        <div className="home-conteiner">
        <Header />
      <h1>Pagina principal</h1>
      <img src='https://media-exp1.licdn.com/dms/image/C4D03AQENVF81QyZUrw/profile-displayphoto-shrink_800_800/0/1660755467136?e=1669852800&v=beta&t=fOzqgzWl6FYRDhqH7fJHxGWVfVlKVDQ1iGzIywr4dRA' width="300px" alt="foster" />
      <div className='icons-conteiner'>
      <a className='icons' href="https://www.linkedin.com/in/foster-/" target="blank"><BsLinkedin /></a>
      <a className='icons' href="https://github.com/Foster-Alan" target="blank"><BsGithub /></a>
      </div>
      </div>
    )
  }
}
