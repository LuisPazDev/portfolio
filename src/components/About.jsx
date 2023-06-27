import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/About.css";
import icon from "../assets/coder.svg";

export const About = () => {
  return (
    <Container fluid id="about" className="container-about p-3 mt-2 mb-2">
      <h1 className="about-title p-2">
        <i>About Me</i>
      </h1>
      <div className="p-4 ms-3 me-3">
        <p className="about-text">
          I am a <b>self-taught front-end web developer </b>
          with a lot of passion for programming I have been coding for over two
          years and have a strong understanding of{" "}
          <b>HTML, CSS, JavaScript, and React. </b>I am also proficient in{" "}
          <b> Git, MongoDB, Firebase, and Express.js. </b> I am fluent in
          Spanish and English. I am always looking for new challenges and I stay
          up-to-date with the latest technologies. I am a highly motivated and
          results-oriented individual with a strong work ethic.
          <br />
          <br />
          <strong>
            <b>Here are some of my skills and experience:</b>
          </strong>
          <br />
          <br />
          <ul>
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
                Proficient in Git, MongoDB, Firebase, Express.js, Bootstrap,
                Material-UI, Tailwind.
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
                Front-End Web Developer at Eido agency Advertising Services for
                over one year.
              </i>
            </li>
          </ul>
          <strong>
            {" "}
            <b> Let's Connect!</b>
          </strong>
          <br />
          I'd love to learn more about your project and how I can help. Please
          feel free to reach out to me.
        </p>
      </div>
      <Button className="btn mb-3" size="lg" variant="dark" href="#contact">
        Contact Me
      </Button>
    </Container>
  );
};
