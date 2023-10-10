import { useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { projects } from "../assets/projects"

export const ProjectCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1)

    return (
        <Container>
            {projects.map((project, index) => (
                <Col key={index}>
                    <Card
                        style={{
                            maxWidth: "300px",
                            border: "none",
                        }}
                        className='mt-5 mx-auto mb-5 rounded'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}>
                        <Card.Img
                            style={{ height: "230px", width: "300px" }}
                            variant='top'
                            src={project.image}
                        />
                        {hoveredIndex === index && (
                            <Card.Body className='bg-light text-center'>
                                <Card.Title className='text-start text-black'>
                                    <u>{project.title}</u>
                                </Card.Title>
                                <Card.Text className='text-black'>
                                    <h6 className='mt-3'>
                                        {project.description}
                                    </h6>
                                </Card.Text>
                                <Button
                                    className='mt-3'
                                    variant='dark'
                                    size='lg'
                                    href={project.link}
                                    target='_blank'>
                                    <strong>
                                        <i>Go there</i>
                                    </strong>
                                </Button>
                            </Card.Body>
                        )}
                    </Card>
                </Col>
            ))}
        </Container>
    )
}
