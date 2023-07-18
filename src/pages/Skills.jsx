// import React, { Component } from 'react'
// import Header from './Header'
// import '../Styles/Skills.css';
// import { IoLogoNodejs } from 'react-icons/io';
// import { GrReactjs } from 'react-icons/gr';
// import { DiJavascript } from 'react-icons/di';
// import { IoLogoCss3 } from 'react-icons/io';
// import { SiRedux } from 'react-icons/si';
// import { GrDocker } from 'react-icons/gr';
// import { SiTestinglibrary } from 'react-icons/si';
// import { DiGit } from 'react-icons/di';
// import { ImHtmlFive } from 'react-icons/im';
// import { SiTypescript } from 'react-icons/si';
// import { GrMysql } from 'react-icons/gr';
// import { SiMongodb } from 'react-icons/si';
// import { FaPython } from 'react-icons/fa';
// import Footer from './Footer';

// export default class About extends Component {
//   render() {
//     function changeImage(imageName, imageText) {
//       const image = document.getElementById('displayedImage');
//       const text = document.querySelector('.image-text');

//       image.src = imageName;
//       text.innerText = imageText;
//   }
//     return (
//       <div>
//         <Header />
//         <div className="skills">
//           <h1>Skills</h1>
//     <div class="options">
//         <div class="option" onclick={changeImage('https://img.freepik.com/vetores-premium/o-esqueleto-da-morte-assustadora-do-ceifador-com-ilustracao-da-lamina-da-foice_407693-55.jpg?w=2000', 'Texto da Imagem 1')}>Opção 1</div>
//         <div class="option" onclick={changeImage('https://cdnb.artstation.com/p/assets/images/images/042/557/539/large/gino-luka-kolling-obelisk-comp.jpg?1634826107', 'Texto da Imagem 2')}>Opção 2</div>
//         <div class="option" onclick="changeImage('https://cdn.awsli.com.br/2500x2500/2234/2234319/produto/221270956/e1-vlaltu4etc.png', 'Texto da Imagem 3')">Opção 3</div>
//  <div class="option" onclick="changeImage('https://img.freepik.com/vetores-premium/o-esqueleto-da-morte-assustadora-do-ceifador-com-ilustracao-da-lamina-da-foice_407693-55.jpg?w=2000', 'Texto da Imagem 4')">Opção 4</div>
//     </div>
//     <div class="image-container">
//         <img id="displayedImage" src="image1.jpg" alt="Imagem exibida" />
//         <div class="image-text">Texto da Imagem 1</div>
//     </div>
//         {/* <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><IoLogoNodejs size={100} />NodeJs</a>
//         <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><GrReactjs size={100} />React</a>
//         <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><DiJavascript size={100} />JavaScript</a>
//         <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><IoLogoCss3 size={100} />CSS</a>
//         <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><SiRedux size={100} />Redux</a>
//         <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><GrDocker size={100} />Docker</a>
//         <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer"><SiTestinglibrary size={100} />Testing Library</a>
//         <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><DiGit size={100} />Git</a>
//         <a href="https://pt.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer"><ImHtmlFive size={100} />HTML</a>
//         <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><SiTypescript size={100} />TypeScript</a>
//         <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><GrMysql size={100} />MySQL</a>
//         <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><SiMongodb size={100} />MongoDB</a>
//         <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaPython size={100} />Python</a> */}
//         </div>
//         <Footer />

       
//         </div>
//     )
//   }
// }

import React from 'react';
import ImageChanger from '../components/Test';

function App() {
  return (
    <div>
      <ImageChanger />
    </div>
  );
}

export default App;
