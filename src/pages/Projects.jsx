import React, { Component } from 'react'
import Header from './Header'
import '../Styles/Projects.css';
import pixelArt from '../img/pixelArt.png'
import starwars from '../img/starwars.png'
import triviaport from '../img/triviaport.png'
import trunfo from '../img/trunfo.png'
import wallet from '../img/wallet.png'
import tunes from '../img/tunes.png'

export default class Projects extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="projects">
        <h1>Projects</h1>
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
        <a target="blank" href="https://foster-trivia.netlify.app"><img src={triviaport} alt="pixel art" width={200} srcset="" /></a>
      </div>
      </>
    )
  }
}
