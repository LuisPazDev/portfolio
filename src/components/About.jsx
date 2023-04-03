import React from "react"
import { Container } from "react-bootstrap"
import "../styles/About.css"

export const About = () => {
    return (
        <Container fluid id='about' className='container-about p-5 mt-3 mb-5'>
            <h1 className='about-title p-5'>About Me</h1>
            <div className='ms-5 me-5 p-2'>
                <p className='about-text'>
                    I am a{" "}
                    <strong>
                        <b>
                            Front End Web Developer specialized in MERN stack{" "}
                            {""}
                        </b>
                    </strong>
                    with a lot of passion for programming. While I have a law
                    degree and I worked like a Lawyer for more than 3 years I
                    kept looking for a new professional challenge and{" "}
                    <strong>
                        <b>I started my IT career in early 2022</b>
                    </strong>
                    {""} taking online courses on educational platforms like{" "}
                    {""}
                    <strong>
                        <b>
                            Codecademy, Udemy, Coursera, and Platzi.
                            {""}
                        </b>
                    </strong>
                    By March 2023, {""}
                    <strong>
                        <b>
                            I successfully completed a Full Stack Web Developer
                            certification from Utel University.
                            {""}
                        </b>
                    </strong>
                    <br />
                    <br />
                    I’m original from Venezuela but living in USA for more than
                    4 years. I speak Spanish and English, and I’m always looking
                    for new challenges and keeping myself updated with the
                    latest technologies. I Currently have knowledge in{" "}
                    <strong>
                        <b>
                            {" "}
                            HTML, CSS, Bootstrap, Tailwind, JavaScript,
                            TypeScript, React, Vue, Node.js, Git, MongoDB,
                            Firebase, Express.js and others. {""}
                        </b>
                    </strong>
                    Feel free to contact me if you have any questions and I will
                    be happy to help you. Visit my Portfolio and check my latest
                    projects.
                </p>
            </div>
        </Container>
    )
}
