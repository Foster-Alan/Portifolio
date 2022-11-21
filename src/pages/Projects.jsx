import React, { Component } from 'react'
import Header from './Header'
import '../Styles/Projects.css';
import pixelArt from '../img/PixelArtCard.jpeg'
import starwars from '../img/StarwarsPlanetsCard.jpeg'
import Trivia from '../img/TriviaCard.jpeg'
import trunfo from '../img/TrunfoCard.jpeg'
import wallet from '../img/WalletCard.jpeg'
import tunes from '../img/TunesCard.jpeg'

export default class Projects extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="projects">
        <h1>Meus Projetos</h1>
        <a target="blank" href="https://foster-pixel-art.netlify.app"><img src={pixelArt} alt="pixel art" width={200} srcset="" /></a>
        <br />
        <a target="blank" href="https://foster-trunfo.netlify.app"><img src={trunfo} alt="pixel art" width={200} srcset="" /></a>
        <br />
        <a target="blank" href="https://foster-wallet.netlify.app"><img src={wallet} alt="pixel art" width={200} srcset="" /></a>
        <br />
        <a target="blank" href="https://foster-tunes.netlify.app"><img src={tunes} alt="pixel art" width={200} srcset="" /></a>
        <br />
        <a target="blank" href="https://foster-starwars.netlify.app"><img src={starwars} alt="pixel art" width={200} srcset="" /></a>
        <br />
        <a target="blank" href="https://foster-trivia.netlify.app"><img src={Trivia} alt="pixel art" width={200} srcset="" /></a>
      </div>
      </>
    )
  }
}
