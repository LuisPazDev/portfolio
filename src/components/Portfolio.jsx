import { ProjectCard } from "./ProjectCard"
import { Badge, Col, Container, Row } from "react-bootstrap"
import "../styles/Portfolio.css"

export const Portfolio = () => {
    return (
        <Container
            fluid
            style={{ backgroundColor: "#D9D9D9" }}
            id='portfolio'
            className='container-portfolio p-3'>
            <Row className=' mb-5'>
                <Col className='text-center mt-3'>
                    <h2>
                        <Badge pill bg='dark'>
                            Portfolio
                        </Badge>
                    </h2>
                    <h5>
                        {" "}
                        <i>Recent Projects</i>
                    </h5>
                </Col>
            </Row>
            <ProjectCard />
        </Container>
    )
}
