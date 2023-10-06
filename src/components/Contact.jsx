import React from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import { ContactForm } from "./ContactForm"

import "../styles/Contact.css"

export const Contact = () => {
    return (
        <Container fluid id='contact' className='container-contact p-3'>
            <Row className='text-center mt-3 mb-4 p-2'>
                <Col>
                    <h2>
                        <Badge pill bg='dark'>
                            <i>Contact Me</i>
                        </Badge>
                    </h2>
                    <h5>
                        {" "}
                        <i>Get In Touch</i>
                    </h5>
                </Col>
            </Row>
            <Row className='mt-2 mb-4 p-3'>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}
