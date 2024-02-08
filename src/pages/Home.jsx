import React, { Component } from 'react'
// import Header from './Header'
import '../Styles/Home.css';
import '../Styles/Card.css';
// import sobremim from '../img/AlanFosterCard.jpeg'
// import projetos from '../img/Projetos.jpeg'
// import Skill from '../img/SkillsCard.jpeg'
// import Experiência from '../img/Experiência.jpeg'
// import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from "./NavBar";
import Exp from "./Exp";
import Skills from "./Skills";
import About from "./About";
import Test from './Project';
import Header from './Header';

// export default class Home extends Component {
//   render() {
//     const cards = [
//       { id: 1, link: '/about', image: sobremim },
//       { id: 2, link: '/projects', image: projetos },
//       { id: 3, link: '/skill', image: Skills },
//       { id: 4, link: '/exp', image: Experiência }
//     ];
//     return (
//         <div className="home-conteiner">
//         {/* <Header /> */}
//       <h1>Escolha Uma Carta</h1>
//       <div className="all-Cards"> 
// <section className="section-cards">
//   {cards.map(card => (
//     <div key={card.id} className={`container div${card.id}`}>
//       <div className="card">
//         <div className="front"></div>
//         <div className="back">
//           <Link to={card.link}><img alt={card.link} src={card.image}/></Link>
//         </div>
//       </div>
//     </div>
//   ))}
// </section>
// <Footer />
//       </div>
//       </div>
//     )
//   }
// }

export default class Home extends Component {
  render() {
    return (
        <div className="home-conteiner">
       <NavBar />

       <Header />


      <Skills />  
      <Test />  
      <Exp />
      <About />
      <Footer />
      </div>
    )
  }
}