import { Container, Col, Row } from "react-bootstrap";
import "../styles/Skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import sass from "../assets/sass.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import vue from "../assets/vue.svg";
import typescript from "../assets/typescript.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import firebase from "../assets/firebase.svg";

export const Skills = () => {
  return (
    <Container fluid id="skills" className="container-skills p-3">
      <div className="skills-title p-2 mt-2 mb-2">
        <h1>
          <i>My Skills</i>
        </h1>
        <h5>
          <i>Programming Skills</i>
        </h5>
      </div>
      <Container>
        <Row
          className="skills-list mt-3 mb-3"
          xs={1}
          sm={1}
          md={3}
          lg={3}
          xl={3}
        >
          <Col className="skills-col p-2">
            <ul>
              <li className="mb-4">
                <img className="skills-logo me-1" src={html} alt="htmllogo" />
                <i>Html</i>
              </li>
              <li className="mb-4">
                <img className="skills-logo me-1" src={css} alt="csslogo" />
                <i>Css</i>
              </li>
              <li className="mb-4">
                <img
                  className="skills-logo me-1"
                  src={bootstrap}
                  alt="bootstaplogo"
                />
                <i>Bootstrap</i>
              </li>
              <li>
                <img className="skills-logo me-1" src={sass} alt="sasslogo" />
                <i>Sass</i>
              </li>
            </ul>
          </Col>
          <Col className="skills-col p-2">
            <ul>
              <li className="mb-4">
                <img
                  className="skills-logo me-1"
                  src={javascript}
                  alt="javascriptlogo"
                />
                <i>JavaScript</i>
              </li>
              <li className="mb-4">
                <img className="skills-logo me-1" src={react} alt="reactlogo" />
                <i>React</i>
              </li>
              <li className="mb-4">
                <img className="skills-logo me-1" src={vue} alt="vuelogo" />
                <i>Vue</i>
              </li>
              <li>
                <img
                  className="skills-logo me-1"
                  src={typescript}
                  alt="typescriptlogo"
                />
                <i>TypeScript</i>
              </li>
            </ul>
          </Col>
          <Col className="skills-col p-2">
            <ul>
              <li className="mb-4">
                <img className="skills-logo me-1" src={node} alt="nodelogo" />
                <i>Node</i>
              </li>
              <li className="mb-4">
                <img
                  className="skills-logo me-1"
                  src={express}
                  alt="expresslogo"
                />
                <i>Express.js</i>
              </li>
              <li className="mb-4">
                <img
                  className="skills-logo me-1"
                  src={mongodb}
                  alt="mongodblogo"
                />
                <i>MongoDB</i>
              </li>
              <li>
                <img
                  className="skills-logo me-1"
                  src={firebase}
                  alt="firebaselogo"
                />
                <i>Firebase</i>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
