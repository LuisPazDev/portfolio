import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import "../styles/Contact.css"

export const Contact = () => {
    return (
        <Container fluid id='contact' className='container-contact p-5'>
            <Row className='text-center mt-4 mb-4 p-5'>
                <Col>
                    <h1>Contact Me</h1>
                    <h4>Get In Touch</h4>
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    <ContactInfo />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}
