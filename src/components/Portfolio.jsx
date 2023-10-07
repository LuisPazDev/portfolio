import { ProjectCard } from "./ProjectCard"
import { Badge, Col, Container, Row } from "react-bootstrap"

import bgportfolio from "../assets/bgabout.png"
import "../styles/Portfolio.css"

export const Portfolio = () => {
    return (
        <Container
            fluid
            style={{
                backgroundImage: `url(${bgportfolio})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            id='portfolio'
            className='container-portfolio p-3'>
            <Row className=' mb-5'>
                <Col className='text-center mt-4'>
                    <h2>
                        <Badge pill bg='dark'>
                            Portfolio
                        </Badge>
                    </h2>
                </Col>
            </Row>
            <ProjectCard />
        </Container>
    )
}
