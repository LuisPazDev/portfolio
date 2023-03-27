import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import "../styles/Skills.css"

export const Skills = () => {
    return (
        <Container fluid className='container-skills p-5'>
            <div className='skills-title p-4'>
                <h1>
                    <i>My Skills</i>
                </h1>
                <h5>
                    <i>Programming Skills</i>
                </h5>
            </div>
            <Container className=' mt-4'>
                <Row className='skills-list p-3'>
                    <Col className='skills-col'>
                        <ul>
                            <li>
                                <i>Html</i>
                            </li>
                            <li>
                                <i>Css</i>
                            </li>
                            <li>Boostrap</li>
                            <li>Tailwind</li>
                        </ul>
                    </Col>
                    <Col className='skills-col'>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>Typescript</li>
                        </ul>
                    </Col>
                    <Col className='skills-col'>
                        <ul>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
