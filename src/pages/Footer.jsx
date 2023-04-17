import React, { Component } from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default class Footer extends Component {
  render() {
    return (
        <div className='icons-conteiner'>
        <a className='icons' href="https://www.linkedin.com/in/foster-/" target="blank"><BsLinkedin /></a>
        <a className='icons' href="https://github.com/Foster-Alan" target="blank"><BsGithub /></a>
        </div>
    )
  }
}
