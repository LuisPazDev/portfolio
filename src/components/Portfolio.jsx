import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"

export const Portfolio = () => {
    return (
        <Container fluid className='container-portfolio p-5'>
            <Row>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                    <h4>Recent Projects</h4>
                </Col>
            </Row>
            <Container className='mt-5'>
                <Row>
                    <Col className='portfolio-project1 text-center'>
                        <div className='portfolio-project-text'>
                            <h5>Dj Store</h5>
                        </div>
                    </Col>
                    <Col className='portfolio-project2 ms-5'>
                        <div>
                            <i>Project 1</i>
                        </div>
                    </Col>
                    <Col className='portfolio-project3 ms-5'>
                        <div>
                            <i>Project 1</i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
