import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "../styles/Portfolio.css"

export const ProjectModal2 = () => {
    return (
        <Card
            className='card-project-modal text-center ms-auto me-auto '
            style={{ width: "20rem" }}>
            <Card.Body>
                <Card.Title className='portfolio-card-title mb-3'>
                    {" "}
                    PizzApp{" "}
                </Card.Title>
                <Card.Subtitle className='portfolio-card-text mb-3 text-muted'>
                    Web Development
                </Card.Subtitle>
                <Button className='mb-3 portfolio-btn'>
                    <a
                        href='https://luispazdev.github.io/pizzapp/'
                        target='_blank'
                        rel='noreferrer'>
                        Visit
                    </a>
                </Button>
            </Card.Body>
        </Card>
    )
}
