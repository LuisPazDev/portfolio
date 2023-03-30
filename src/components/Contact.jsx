import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import "../styles/Contact.css"

export const Contact = () => {
    return (
        <Container fluid id='contact' className='container-contact p-5'>
            <Row className='text-center'>
                <Col>
                    <h1>Contact Me</h1>
                    <h4>Get In Touch</h4>
                </Col>
            </Row>
            <Row className='mt-5'>
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
