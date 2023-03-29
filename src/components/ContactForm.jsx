import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const ContactForm = () => {
    return (
        <Form className='container-contact-form'>
            <h4 className='mb-3'>Send Message</h4>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicMessage'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    className='input-subject'
                    type='message'
                    placeholder='Message'
                />
            </Form.Group>

            <Button variant='dark' type='submit'>
                Submit
            </Button>
        </Form>
    )
}
