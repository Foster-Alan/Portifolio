import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from './Header'
import '../Styles/Projects.css';
import pixelArt from '../img/PixelArtCard.jpeg'
import starwars from '../img/StarwarsPlanetsCard.jpeg'
import Trivia from '../img/TriviaCard.jpeg'
import trunfo from '../img/TrunfoCard.jpeg'
import wallet from '../img/WalletCard.jpeg'
import tunes from '../img/TunesCard.jpeg'
import Mylist from '../img/My List.jpeg'
import Footer from './Footer';

export default class Projects extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return (
      <>
      <Header />
      <div className="projects">
        <h1>Meus Projetos</h1>
        <p>(Clique para ser redirecionado)</p>
      </div>
<Carousel
  // swipeable={false}
  draggable={false}
  // showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="transform 600ms ease-in-out"
  transitionDuration={2500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div className="carrosel">
    <a target="blank" href="https://foster-pixel-art.netlify.app"><img src={pixelArt} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://foster-trunfo.netlify.app"><img src={trunfo} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://foster-wallet.netlify.app"><img src={wallet} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://foster-tunes.netlify.app"><img src={tunes} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://star-wars-red-phi.vercel.app"><img src={starwars} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://foster-trivia.netlify.app"><img src={Trivia} alt="pixel art" width={200} srcset="" /></a>
    </div>
    <div className="carrosel">
    <a target="blank" href="https://my-list-blond.vercel.app"><img src={Mylist} alt="pixel art" width={200} srcset="" /></a>
    </div>
</Carousel>
<Footer />
  
      </>
    )
  }
}
