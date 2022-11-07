import React, { Component } from 'react'
import Header from './Header'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Projects</h1>
        <a target="blank" href="https://foster-pixel-art.netlify.app">Pixel Art</a>
        <br />
        <a target="blank" href="https://foster-trivia.netlify.app">Trunfo</a>
        <br />
        <a target="blank" href="https://foster-wallet.netlify.app">Wallet</a>
        <br />
        <a target="blank" href="https://foster-tunes.netlify.app">Tunes</a>
        <br />
        <a target="blank" href="https://foster-starwars.netlify.app">StarWars</a>
        <br />
        <a target="blank" href="https://foster-trivia.netlify.app">Trivia</a>
      </div>
    )
  }
}
