import React, { Component } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../Styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="icons-conteiner">
        <a
          className="icons"
          href="https://www.linkedin.com/in/foster-/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          className="icons"
          href="https://github.com/Foster-Alan"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </footer>
    );
  }
}
