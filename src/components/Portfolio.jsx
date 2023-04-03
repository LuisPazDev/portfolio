import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"
import { ProjectCard1 } from "./ProjectCard1"
import { ProjectCard2 } from "./ProjectCard2"
import { ProjectCard3 } from "./ProjectCard3"

export const Portfolio = () => {
    return (
        <Container fluid id='portfolio' className='container-portfolio p-5'>
            <Row className='mt-5 mb-5'>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                    <h4>Recent Projects</h4>
                </Col>
            </Row>
            <Row className='mt-3 mb-5'>
                <Col>
                    <ProjectCard1 />
                </Col>
                <Col>
                    <ProjectCard2 />
                </Col>
                <Col>
                    <ProjectCard3 />
                </Col>
            </Row>
        </Container>
    )
}
