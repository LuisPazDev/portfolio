import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"
import { ProjectCard1 } from "./ProjectCard1"
import { ProjectCard2 } from "./ProjectCard2"
import { ProjectCard3 } from "./ProjectCard3"

export const Portfolio = () => {
    return (
        <Container fluid id='portfolio' className='container-portfolio p-5'>
            <Row className='mt-4 mb-5'>
                <Col className='text-center mt-3'>
                    <h1>
                        <i>Portfolio</i>{" "}
                    </h1>
                    <h4>
                        {" "}
                        <i>Recent Projects</i>
                    </h4>
                </Col>
            </Row>
            <Container className='mt-4'>
                <Row className='mt-4 mb-2' xs={1} sm={1} md={1} lg={1} xl={3}>
                    <Col className='d-flex justify-content-center align-items-center mb-5'>
                        <ProjectCard1 />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center mb-5'>
                        <ProjectCard2 />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center mb-5'>
                        <ProjectCard3 />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
