import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"

export const Portfolio = () => {
    return (
        <Container fluid id='portfolio' className='container-portfolio p-5'>
            <Row className='mt-5 mb-5'>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                    <h4>Recent Projects</h4>
                </Col>
            </Row>
            <Container className='mt-5 mb-5'>
                <Row className='p-3'>
                    <Col className='portfolio-project1 text-center'>
                        <div className='portfolio-project-text'>
                            <h5>Dj Store</h5>
                        </div>
                    </Col>
                    <Col className='portfolio-project2 ms-4'>
                        <div>
                            <i>Project 1</i>
                        </div>
                    </Col>
                    <Col className='portfolio-project3 ms-4'>
                        <div>
                            <i>Project 1</i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}