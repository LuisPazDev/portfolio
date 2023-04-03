import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "../styles/Portfolio.css"

export const ProjectModal = () => {
    return (
        <Card
            className='card-project-modal text-center ms-auto me-auto '
            style={{ width: "16rem" }}>
            <Card.Body>
                <Card.Title> Dj Store </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    Landing Page
                </Card.Subtitle>
                <Button>
                    <a href='' target='_blank' rel='noreferrer'>
                        Visit
                    </a>
                </Button>
            </Card.Body>
        </Card>
    )
}
