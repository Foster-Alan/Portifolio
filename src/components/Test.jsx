import React, { useState } from 'react';

import Header from '../pages/Header';
import '../Styles/Skills.css';
import Footer from '../pages/Footer';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { DiJavascript } from 'react-icons/di';
import { IoLogoCss3 } from 'react-icons/io';
import { SiRedux } from 'react-icons/si';
import { GrDocker } from 'react-icons/gr';
import { SiTestinglibrary } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

const ImageChanger = () => {
  const [currentImage, setCurrentImage] = useState('image1.jpg');
  const [imageText, setImageText] = useState('Texto da Imagem 1');

  const changeImage = (imageName, text) => {
    setCurrentImage(imageName);
    setImageText(text);
  };

  return (
      <div>
        <Header />
        <h1>Skills</h1>
        <div className="skills-conteiner">
      <div className="skills">
        <div className="option" onClick={() => changeImage('https://vinteum.com/media/2011/03/html5logo.gif', 'Texto da Imagem 1')}>
          {<ImHtmlFive size={100}/>}HTML
        </div>
        <div className="option" onClick={() => changeImage('image2.jpg', 'Texto da Imagem 2')}>
        {<IoLogoCss3 size={100}/>}CSS
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<DiJavascript size={100}/>}JavaScript
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<IoLogoNodejs size={100}/>}NodeJs
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<GrReactjs size={100}/>}ReactJs
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<SiRedux size={100}/>}Redux
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<GrDocker size={100}/>}Docker
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<SiTestinglibrary size={100}/>}Testing Library
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<DiGit size={100}/>}Git
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<SiTypescript size={100}/>}Typescript
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<FaPython size={100}/>}Python
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<GrMysql size={100}/>}Mysql
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<SiMongodb size={100}/>}Mongodb
        </div>
      </div>
      {/* <div className="image-container">
        <img src={currentImage} alt="Imagem exibida" />
        <div className="image-text">{imageText}</div>
      </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ImageChanger;