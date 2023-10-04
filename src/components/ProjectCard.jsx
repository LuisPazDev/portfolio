import { useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { projects } from "../assets/projects"

import "../styles/Portfolio.css"

export const ProjectCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1)

    return (
        <Container>
            <Row className='mt-4 mb-2' xs={1} sm={1} md={2} lg={2} xl={3}>
                {projects.map((project, index) => (
                    <Col className='d-flex justify-content-center align-items-center mb-5'>
                        <Card
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                            style={{
                                width: "20rem",
                            }}>
                            <Card.Img
                                className='porfolio-card-img'
                                variant='top'
                                src={project.image}
                            />
                            {hoveredIndex === index && (
                                <Card.ImgOverlay className='bg-light text-center'>
                                    <Card.Title className='portfolio-project-title'>
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Button
                                        variant='dark'
                                        size='lg'
                                        href={project.link}
                                        target='_blank'>
                                        Go there
                                    </Button>
                                </Card.ImgOverlay>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
