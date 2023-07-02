import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import "../styles/About.css";
import ilustration from "../assets/aboutbg.jpg";
import icon from "../assets/coder.svg";

export const About = () => {
  return (
    <Container fluid id="about" className="mt-4">
      <div className="text-center p-2">
        <h1 className="about-title">
          <i>About Me</i>
        </h1>
      </div>
      <Row className="mt-1">
        <Row className="text-center mb-3">
          <h5>
            <i>Self-taught frontend developer</i>
          </h5>
        </Row>
        <Col>
          <div className="about-text">
            <ul className="mt-3">
              <li>
                <img src={icon} className="about-icon" />
                <i> Coding for over two years</i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i> Developed websites using Html, CSS, JavaScript</i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i> Developed Web Apps using React.js and Node.js</i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i> Mobil Development with React Native.</i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i>
                  Proficient in Git, MongoDB, Firebase, Express.js,
                  Bootstrap,Material-UI, Tailwind.
                </i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i>
                  Utel University Full Stack Web Developer Certification (2023)
                </i>
              </li>
              <li>
                <img src={icon} className="about-icon" />
                <i>
                  Front-End Web Developer at Eido agency Advertising Services
                  for over one year.
                </i>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="text-center">
          <img src={ilustration} className="about-img" />
        </Col>
      </Row>
      <Row className="mt-4 text-center">
        <div className="about-text p-3">
          <h5>
            <i>
              Let's Connect!
              <span role="img" aria-label="emoji">
                🤝
              </span>
            </i>
          </h5>
          <p>
            I'd love to learn more about your project and how I can help. Please
            feel free to reach out to me.
          </p>
        </div>
        <div>
          <Button className="mb-5" size="lg" variant="dark" href="#contact">
            Contact Me
          </Button>
        </div>
      </Row>
    </Container>
  );
};
