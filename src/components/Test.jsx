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
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiJest } from 'react-icons/si';


import htmlimage from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javaScript.png'
import git from '../img/git.png'
import nodejs from '../img/nodejs.png'
import mong from '../img/mong.png'
import docker from '../img/docker.png'
import Python from '../img/Python.png'
import react from '../img/react.png'
import redux from '../img/redux.png'
import typescript from '../img/type.png'
import sql from '../img/sql.png'
import Jest from '../img/Jest.png'
import testing from '../img/testing.png'

const ImageChanger = () => {
  const [currentImage, setCurrentImage] = useState(htmlimage); //Add currentImage como primeiro parametro dessa const
  const [imageText, setImageText] = useState('HTML (Hypertext Markup Language). É a linguagem de marcação utilizada para criar a estrutura e o conteúdo básico de páginas da web. HTML usa tags para definir elementos e sua formatação.'); //Add imageText Como primeiro parametro dessa const

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
        <div className="option" onClick={() => changeImage(htmlimage, 'HTML (Hypertext Markup Language). É a linguagem de marcação utilizada para criar a estrutura e o conteúdo básico de páginas da web. HTML usa tags para definir elementos e sua formatação.')}>
          {<ImHtmlFive size={100}/>}HTML
        </div>
        <div className="option" onClick={() => changeImage(css, 'CSS (Cascading Style Sheets). É uma linguagem de estilo usada para controlar a apresentação e o layout dos elementos em uma página da web. O CSS complementa o HTML, permitindo definir cores, fontes, margens, posicionamento e outros aspectos visuais.')}>
        {<IoLogoCss3 size={100}/>}CSS
        </div>
        <div className="option" onClick={() => changeImage(javascript, 'JavaScript É uma linguagem de programação de alto nível que adiciona interatividade e comportamento dinâmico às páginas da web. Com JavaScript, é possível manipular elementos HTML, criar animações, validar formulários e muito mais.')}>
        {<DiJavascript size={100}/>}JavaScript
        </div>
        <div className="option" onClick={() => changeImage(typescript, 'TypeScript É um superset do JavaScript que adiciona tipagem estática à linguagem. Ele fornece uma camada adicional de verificação de tipos durante o desenvolvimento, o que ajuda a evitar erros e a melhorar a manutenibilidade do código.')}>
        {<SiTypescript size={100}/>}Typescript
        </div>
        <div className="option" onClick={() => changeImage(Python, 'Python é uma linguagem de programação de alto nível, interpretada e versátil, valorizada por sua simplicidade e biblioteca abrangente. Amplamente usada em desenvolvimento web, ciência de dados e automação. Popular e apreciada pela sua legibilidade e comunidade ativa.')}>
        {<FaPython size={100}/>}Python
        </div>
        <div className="option" onClick={() => changeImage(nodejs, 'Node.js é um ambiente de tempo de execução JavaScript de código aberto, permitindo executar código no lado do servidor. É altamente eficiente, escalável e amplamente usado para aplicações web em tempo real.')}>
        {<IoLogoNodejs size={100}/>}NodeJs
        </div>
        <div className="option" onClick={() => changeImage(react, 'React JS É uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI) reativas e componentizadas. O React permite criar aplicativos web eficientes, reutilizáveis ​​e fáceis de manter, utilizando um conceito chamado de "componentes".')}>
        {<GrReactjs size={100}/>}ReactJs
        </div>
        <div className="option" onClick={() => changeImage(redux, 'Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, com fluxo unidirecional de dados e uma "store" centralizada. Utilizado com React, permite controle previsível do estado, facilitando o desenvolvimento de aplicações complexas com estados compartilhados.')}>
        {<SiRedux size={100}/>}Redux
        </div>
        <div className="option" onClick={() => changeImage(docker, 'Docker é uma plataforma de código aberto para criar, distribuir e executar aplicativos em contêineres leves e isolados. Torna o desenvolvimento e implantação mais eficientes, garantindo consistência em diferentes ambientes.')}>
        {<GrDocker size={100}/>}Docker
        </div>
        <div className="option" onClick={() => changeImage(testing, 'Testing Library é uma biblioteca de testes JavaScript que prioriza a escrita de testes mais realistas, enfocando o comportamento do usuário final. Ela fornece utilitários para interagir com a interface de forma similar ao usuário, melhorando a qualidade dos testes em aplicações web.')}>
        {<SiTestinglibrary size={100}/>}Testing Library
        </div>
        <div className="option" onClick={() => changeImage(Jest, 'Jest é um popular framework de testes JavaScript que oferece uma experiência simples e rápida, com suporte para testes de unidade, integração, snapshot, execução assíncrona e mockings. Amplamente utilizado em projetos com React e Node.js.')}>
        {<SiJest size={100}/>}Jest
        </div>
        <div className="option" onClick={() => changeImage(git, 'Git É um sistema de controle de versão distribuído amplamente usado para rastrear e gerenciar mudanças no código-fonte. Ele permite que desenvolvedores trabalhem em colaboração, revertam alterações indesejadas e gerenciem o histórico do projeto de forma eficiente.')}>
        {<DiGit size={100}/>}Git
        </div>
        <div className="option" onClick={() => changeImage(sql, 'SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular bancos de dados relacionais. Assim como o HTML é usado para criar a estrutura e o conteúdo básico de páginas da web, o SQL é usado para interagir com bancos de dados, permitindo a criação, consulta, atualização e exclusão de dados armazenados.')}>
        {<AiOutlineConsoleSql size={100}/>}Sql
        </div>
        <div className="option" onClick={() => changeImage(mong, 'MongoDB é um banco de dados NoSQL de código aberto, orientado a documentos, que oferece flexibilidade, escalabilidade e alta performance para aplicações modernas. Utiliza formato BSON para armazenar dados complexos e é amplamente utilizado em desenvolvimento web, aplicativos móveis e análise de dados.')}>
        {<SiMongodb size={100}/>}Mongodb
        </div>
      </div>
      <div className="image-container">
        <img src={currentImage} alt="Imagem exibida" />
        <p className="image-text">{imageText}</p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImageChanger;