import React from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import { ContactForm } from "./ContactForm"

import "../styles/Contact.css"
import bgcontact from "../assets/bg-contact.png"

export const Contact = () => {
    return (
        <Container
            style={{
                backgroundImage: `url(${bgcontact})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            fluid
            id='contact'
            className=''>
            <Row className='text-center p-2'>
                <Col>
                    <h2 className='mt-4'>
                        <Badge pill bg='dark'>
                            <i>Contact Me</i>
                        </Badge>
                    </h2>
                </Col>
            </Row>
            <Row className='p-3'>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}
