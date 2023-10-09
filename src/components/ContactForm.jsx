import { useState } from "react"
import { db } from "../config/Firebase"
import { addDoc, collection } from "firebase/firestore"
import { Container, Form, Button, Col, Row } from "react-bootstrap"

import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import swal from "sweetalert"

export const ContactForm = () => {
    const [input, setInput] = useState({})

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const comment = collection(db, "contact")
            const res = await addDoc(comment, input)
            clearForm()
            swal({
                title: "Message sent!",
                text: "I will get back to you as soon as possible",
                icon: "success",
                button: false,
                timer: 2000,
            })
            return res
        } catch (error) {
            swal({
                title: "Error!",
                text: "Something went wrong, please try again",
                icon: "error",
                button: "Ok",
            })
            clearForm()
            console.log(error)
        }
    }

    const clearForm = () => {
        document.getElementById("form").reset()
    }

    return (
        <Container
            fluid
            className='d-flex flex-column justify-content-center align-items-center'>
            <Form
                style={{
                    maxWidth: "600px",
                    backgroundColor: "#212529",
                    color: "white",
                }}
                className='mt-3 border border-dark rounded p-4'
                id='form'
                onSubmit={handleSubmit}>
                {" "}
                {/* add onSubmit attribute */}
                <Row>
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
                            style={{
                                backgroundColor: "black",
                                border: "white solid 1px",
                            }}
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
                    <h4 className='text-white'>
                        <strong>
                            <i>Social Media</i>
                        </strong>
                    </h4>
                </Col>
            </Row>
            <Row className='mt-4 mb-5'>
                <Col>
                    <a
                        href='mailto:luispazdev@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                            src={gmail}
                            alt='gmaillogo'
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
                            alt='linkedinlogo'
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
                            alt='githublogo'
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
