import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <Container fluid id="contact" className="container-contact p-3">
      <Row className="text-center mt-3 mb-4 p-2">
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
      <Row className="mt-5 mb-4 p-3" xs={1} sm={1} md={2} lg={2} xl={2}>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <ContactInfo />
        </Col>
      </Row>
    </Container>
  );
};
