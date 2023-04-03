import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"
import { ProjectCard } from "./ProjectCard"

export const Portfolio = () => {
    return (
        <Container fluid id='portfolio' className='container-portfolio p-5'>
            <Row className='mt-5 mb-5'>
                <Col className='text-center'>
                    <h1>Portfolio</h1>
                    <h4>Recent Projects</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard />
                </Col>
                <Col>
                    <ProjectCard />
                </Col>
                <Col>
                    <ProjectCard />
                </Col>
            </Row>
        </Container>
    )
}
