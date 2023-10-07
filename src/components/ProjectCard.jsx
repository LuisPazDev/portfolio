import { useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { projects } from "../assets/projects"

export const ProjectCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1)

    return (
        <Container>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    style={{
                        maxWidth: "300px",
                        border: "none",
                    }}
                    className='mt-5 mx-auto shadow-lg mb-5 rounded'
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}>
                    <Card.Img
                        style={{ height: "200px", width: "300px" }}
                        variant='top'
                        src={project.image}
                    />
                    {hoveredIndex === index && (
                        <Card.Body className='bg-dark text-center'>
                            <Card.Title className='text-start text-white'>
                                <u>{project.title}</u>
                            </Card.Title>
                            <Card.Text className='text-white'>
                                <h6 className='mt-3'>{project.description}</h6>
                            </Card.Text>
                            <Button
                                className='mt-3'
                                variant='outline-light'
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
            ))}
        </Container>
    )
}
