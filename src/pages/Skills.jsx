import React, { Component } from 'react'
import Header from './Header'
import '../Styles/About.css';
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

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="skills">
          <h3>Skills</h3>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><IoLogoNodejs size={100} />NodeJs</a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><GrReactjs size={100} />React</a>
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><DiJavascript size={100} />JavaScript</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><IoLogoCss3 size={100} />CSS</a>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><SiRedux size={100} />Redux</a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><GrDocker size={100} />Docker</a>
        <a href="https://testing-library.com/" target="_blank" rel="noopener noreferrer"><SiTestinglibrary size={100} />Testing Library</a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><DiGit size={100} />Git</a>
        <a href="https://pt.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer"><ImHtmlFive size={100} />HTML</a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><SiTypescript size={100} />TypeScript</a>
        </div>

       
        </div>
    )
  }
}
