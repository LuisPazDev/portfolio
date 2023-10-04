import { ProjectCard } from "./ProjectCard"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"

export const Portfolio = () => {
    return (
        <Container fluid id='portfolio' className='container-portfolio p-3'>
            <Row className=' mb-5'>
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
            <ProjectCard />
        </Container>
    )
}
