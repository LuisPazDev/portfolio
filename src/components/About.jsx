import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/About.css";

export const About = () => {
  return (
    <Container fluid id="about" className="container-about p-4 mt-3 mb-5">
      <h1 className="about-title p-3">
        <i>About Me</i>
      </h1>
      <div className="p-4">
        <p className="about-text">
          I am a <b>self-taught front-end web developer</b>
          with a passion for programming I have been coding for over two years
          and have a strong understanding of{" "}
          <b>HTML, CSS, JavaScript, and React. </b>
          I am also proficient in Git, MongoDB, Firebase, and Express.js. I am
          fluent in Spanish and English. I am always looking for new challenges
          and I stay up-to-date with the latest technologies. I am a highly
          motivated and results-oriented individual with a strong work ethic.
          <br />
          <br />
          <strong>
            <b>Here are some of my skills and experience:</b>
          </strong>
          <br />
          <br />
          <ul>
            <li>
              <i> - Developed websites and web-apps using React and Node.js</i>
            </li>
            <li>
              <i>
                - Proficient in HTML, CSS, JavaScript, React, Node.js, Git,
                MongoDB, Firebase, Express.js, Bootstrap, and Material-UI
              </i>
            </li>
            <li>
              <i>
                - Utel University Full Stack Web Developer Certification (2023)
              </i>
            </li>
            <li>
              <i>
                - Worked as a Front-End Web Developer at Eido agency Advertising
                Services for over one year.
              </i>
            </li>
          </ul>
          <strong>Let's connect!</strong>
          <br />
          I'd love to learn more about your project and how I can help. Please
          feel free to reach out to me.
        </p>
      </div>
      <Button className="btn mt-4" variant="dark" href="#contact">
        Contact Me
      </Button>
    </Container>
  );
};
