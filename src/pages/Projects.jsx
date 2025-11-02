import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from './Header';
import '../Styles/Projects.css';
import '../Styles/Loader.css';
import Footer from './Footer';

import pixelArt from '../img/PixelArtCard.jpeg';
import starwars from '../img/StarwarsPlanetsCard.jpeg';
import Trivia from '../img/TriviaCard.jpeg';
import trunfo from '../img/TrunfoCard.jpeg';
import wallet from '../img/WalletCard.jpeg';
import tunes from '../img/TunesCard.jpeg';
import Mylist from '../img/My List.jpeg';

export default class Projects extends Component {
  state = {
    imagesLoaded: 0,
    totalImages: 0,
    ready: false
  };

  projects = [
    { href: "https://foster-pixel-art.netlify.app", src: pixelArt, alt: "Pixel Art" },
    { href: "https://foster-trunfo.netlify.app", src: trunfo, alt: "Trunfo" },
    { href: "https://foster-wallet.netlify.app", src: wallet, alt: "Wallet" },
    { href: "https://foster-tunes.netlify.app", src: tunes, alt: "Tunes" },
    { href: "https://star-wars-red-phi.vercel.app", src: starwars, alt: "Star Wars" },
    { href: "https://foster-trivia.netlify.app", src: Trivia, alt: "Trivia" },
    { href: "https://my-list-blond.vercel.app", src: Mylist, alt: "My List" },
  ];

  componentDidMount() {
    // Define totalImages dinamicamente
    const total = this.projects.length;
    this.setState({ totalImages: total }, () => {
      this.preloadImages();
    });
  }

  preloadImages = () => {
    this.projects.forEach((proj) => {
      const img = new Image();
      img.src = proj.src;
      img.onload = this.handleImageLoad;
      img.onerror = this.handleImageLoad; // conta erro também para não travar o loader
    });
  };

  handleImageLoad = () => {
    this.setState((prev) => {
      const imagesLoaded = prev.imagesLoaded + 1;
      const ready = imagesLoaded >= prev.totalImages;
      return { imagesLoaded, ready };
    });
  };

  render() {
    const { ready } = this.state;

    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, slidesToSlide: 3 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
    };

    return (
      <>
        <Header />
        {!ready ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : (
          <>
            <div className="projects">
              <h1>Meus Projetos</h1>
              <p>(Clique para ser redirecionado)</p>
            </div>

            <Carousel
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile"}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="transform 600ms ease-in-out"
              transitionDuration={2500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {this.projects.map((proj, i) => (
                <div className="carrosel" key={i}>
                  <a target="_blank" rel="noreferrer" href={proj.href}>
                    <img src={proj.src} alt={proj.alt} width={200} />
                  </a>
                </div>
              ))}
            </Carousel>
            <Footer />
          </>
        )}
      </>
    );
  }
}
