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
                    <h1>
                        {" "}
                        <i>Contact Me</i>
                    </h1>
                    <h4>
                        {" "}
                        <i>Get In Touch</i>
                    </h4>
                </Col>
            </Row>
            <Row className='mt-4 mb-4' xs={1} md={1} lg={2} xl={2}>
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <ContactInfo />
                </Col>
            </Row>
        </Container>
    )
}
