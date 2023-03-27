import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import "../styles/Contact.css"

export const Contact = () => {
    return (
        <Container fluid className='container-contact'>
            <Row className='text-center p-5'>
                <Col>
                    <h1>Contact Me</h1>
                    <h4>Get In Touch</h4>
                </Col>
            </Row>
            <Row className=''>
                <Col className='text-center'>
                    <h3>Phone</h3>
                    <p>123-456-7890</p>
                </Col>
                <Col className='text-center'>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                            />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className='mb-3'
                            controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Check me out' />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
