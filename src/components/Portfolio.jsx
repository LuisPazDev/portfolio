import { ProjectCard } from "./ProjectCard"
import { Badge, Col, Container, Row } from "react-bootstrap"

import bgportfolio from "../assets/bgportfolio.png"

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
            <Row className=' mb-3'>
                <Col className='text-center mt-4'>
                    <h2>
                        <Badge pill bg='dark'>
                            Portfolio
                        </Badge>
                    </h2>
                    <h5 className='text-white'>
                        <i>Recent Projects</i>
                    </h5>
                </Col>
            </Row>
            <Row>
                <ProjectCard />
            </Row>
        </Container>
    )
}
