import { useState } from "react"
import { db } from "../config/Firebase"
import { addDoc, collection } from "firebase/firestore"
import { Container, Form, Button, Col, Row } from "react-bootstrap"

import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"

export const ContactForm = () => {
    const [input, setInput] = useState({})

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }

    const clearForm = () => {
        document.getElementById("contact-form").reset()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!input.name || !input.email || !input.message) {
            alert("Please fill out all fields")
            return
        }
        try {
            const comment = collection(db, "contact")
            const res = await addDoc(comment, input)
            alert("Message sent successfully")
            clearForm()
            return res
        } catch (error) {
            alert("Error sending message")
            clearForm()
            console.log(error)
        }
    }

    return (
        <Container
            fluid
            className='d-flex flex-column justify-content-center align-items-center'>
            <Form
                style={{
                    backgroundColor: "#D9D9D9",
                    color: "#000000",
                }}
                className='mt-3 border border-dark rounded p-4'
                id='form'>
                <Row>
                    <Col className='text-center mb-4'>
                        <h5>
                            <strong>
                                <i>
                                    <u>Send me a Message</u>
                                </i>
                            </strong>
                        </h5>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Name</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleInputChange}
                                name='name'
                                type='text'
                                placeholder='Enter your Name'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6} className='mb-3'>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Email</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                className='border border-dark'
                                onChange={handleInputChange}
                                name='email'
                                type='email'
                                placeholder='Enter email'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={12} lg={12} className='text-start mt-3'>
                        <Form.Group controlId='formBasicDescription'>
                            <Form.Label>
                                <h6>
                                    <strong>
                                        <i>Message</i>
                                    </strong>
                                </h6>
                            </Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                className='border border-dark input-comment'
                                onChange={handleInputChange}
                                name='comment'
                                type='text'
                                placeholder='Leave your Message here'
                                required
                            />
                        </Form.Group>
                    </Col>

                    <div className='text-center mt-3'>
                        <Button
                            onClick={handleSubmit}
                            variant='dark'
                            className='mt-3 mb-3'
                            size='lg'
                            type='submit'>
                            <strong>
                                <i>Send</i>
                            </strong>
                        </Button>
                    </div>
                </Row>
            </Form>
            <Row className='mt-5'>
                <Col>
                    <h5>
                        <strong>
                            <i>Social Media</i>
                        </strong>
                    </h5>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <a
                        href='https://github.com/LuisPazDev'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                            src={gmail}
                            alt=''
                        />
                    </a>
                </Col>
                <Col>
                    <a
                        href='https://www.linkedin.com/in/luispazdev/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                            src={linkedin}
                            alt=''
                        />
                    </a>
                </Col>
                <Col>
                    <a
                        href='https://github.com/LuisPazDev'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                            src={github}
                            alt=''
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
