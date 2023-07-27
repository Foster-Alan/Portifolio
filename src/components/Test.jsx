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

import htmlimage from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javaScript.png'
import git from '../img/git.png'
import node from '../img/node.png'
import mong from '../img/mong.png'
import docker from '../img/docker.png'
import Python from '../img/Python.png'
import react from '../img/react.png'
import redux from '../img/redux.png'
import typescript from '../img/type.png'
import sql from '../img/sql.png'

const ImageChanger = () => {
  const [currentImage, setCurrentImage] = useState('image1.jpg'); //Add currentImage como primeiro parametro dessa const
  const [imageText, setImageText] = useState('Texto da Imagem 1'); //Add imageText Como primeiro parametro dessa const

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
        <div className="option" onClick={() => changeImage(htmlimage, 'Texto da Imagem 1')}>
          {<ImHtmlFive size={100}/>}HTML
        </div>
        <div className="option" onClick={() => changeImage(css, 'Texto da Imagem 2')}>
        {<IoLogoCss3 size={100}/>}CSS
        </div>
        <div className="option" onClick={() => changeImage(javascript, 'Texto da Imagem 3')}>
        {<DiJavascript size={100}/>}JavaScript
        </div>
        <div className="option" onClick={() => changeImage(node, 'Texto da Imagem 3')}>
        {<IoLogoNodejs size={100}/>}NodeJs
        </div>
        <div className="option" onClick={() => changeImage(react, 'Texto da Imagem 3')}>
        {<GrReactjs size={100}/>}ReactJs
        </div>
        <div className="option" onClick={() => changeImage(redux, 'Texto da Imagem 3')}>
        {<SiRedux size={100}/>}Redux
        </div>
        <div className="option" onClick={() => changeImage(docker, 'Texto da Imagem 3')}>
        {<GrDocker size={100}/>}Docker
        </div>
        <div className="option" onClick={() => changeImage('image3.jpg', 'Texto da Imagem 3')}>
        {<SiTestinglibrary size={100}/>}Testing Library
        </div>
        <div className="option" onClick={() => changeImage(git, 'Texto da Imagem 3')}>
        {<DiGit size={100}/>}Git
        </div>
        <div className="option" onClick={() => changeImage(typescript, 'Texto da Imagem 3')}>
        {<SiTypescript size={100}/>}Typescript
        </div>
        <div className="option" onClick={() => changeImage(Python, 'Texto da Imagem 3')}>
        {<FaPython size={100}/>}Python
        </div>
        <div className="option" onClick={() => changeImage(sql, 'Texto da Imagem 3')}>
        {<GrMysql size={100}/>}Mysql
        </div>
        <div className="option" onClick={() => changeImage(mong, 'Texto da Imagem 3')}>
        {<SiMongodb size={100}/>}Mongodb
        </div>
      </div>
      <div className="image-container">
        <img src={currentImage} alt="Imagem exibida" />
        <div className="image-text">{imageText}</div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImageChanger;