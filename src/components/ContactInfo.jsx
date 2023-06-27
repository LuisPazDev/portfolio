import { Container } from "react-bootstrap";
import gmaillogo from "../assets/gmail.svg";
import linkedinlogo from "../assets/linkedin.svg";
import githublogo from "../assets/github.svg";

export const ContactInfo = () => {
  return (
    <Container className="container-contact-info">
      <div className="container-contact-logo mt-5">
        <img
          className="contact-info-logo me-3"
          src={gmaillogo}
          alt="gmailllogo"
        />
        <div>
          <h4 className="contact-info-title">Email</h4>
          <p>luispazdev@gmail.com</p>
        </div>
      </div>
      <div className="container-contact-logo">
        <img
          className="contact-info-logo me-3"
          src={linkedinlogo}
          alt="linkedinlogo"
        />
        <div>
          <h4 className="contact-info-title">Linkedin</h4>
          <a
            href="https://www.linkedin.com/in/luispazdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/luispazdev/
          </a>
        </div>
      </div>
      <div className="container-contact-logo">
        <img
          className="contact-info-logo me-3"
          src={githublogo}
          alt="githublogo"
        />
        <div>
          <h4 className="contact-info-title">Github</h4>
          <a
            href="https://github.com/LuisPazDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/LuisPazDev
          </a>
        </div>
      </div>
    </Container>
  );
};
