import { useState } from "react";
import { db } from "../config/Firebase";
import { addDoc, collection } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ContactForm = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const clearForm = () => {
    document.getElementById("contact-form").reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.name || !input.email || !input.message) {
      alert("Please fill out all fields");
      return;
    }
    try {
      const comment = collection(db, "contact");
      const res = await addDoc(comment, input);
      alert("Message sent successfully");
      clearForm();
      return res;
    } catch (error) {
      alert("Error sending message");
      clearForm();
      console.log(error);
    }
  };

  return (
    <Form
      id="contact-form"
      className="container-contact-form"
      onSubmit={handleSubmit}
    >
      <h4 className="mb-3">Send Message</h4>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          className="input-subject"
          type="text"
          name="message"
          placeholder="Message"
        />
      </Form.Group>

      <Button variant="dark" size="lg" type="submit">
        Send
      </Button>
    </Form>
  );
};
