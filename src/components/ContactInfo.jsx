import { Container } from "react-bootstrap"
import gmaillogo from "../assets/gmail.svg"
import linkedinlogo from "../assets/linkedin.svg"
import githublogo from "../assets/github.svg"

export const ContactInfo = () => {
    return (
        <Container className='container-contact-info'>
            <div className='container-contact-logo mt-5'>
                <img
                    className='contact-info-logo me-3'
                    src={gmaillogo}
                    alt='gmailllogo'
                />
                <div>
                    <h3>Email</h3>
                    <p>luispazdev@gmail.com</p>
                </div>
            </div>
            <div className='container-contact-logo'>
                <img
                    className='contact-info-logo me-3'
                    src={linkedinlogo}
                    alt='linkedinlogo'
                />
                <div>
                    <h3>Linkedin</h3>
                    <p>https://www.linkedin.com/in/luispazdev/</p>
                </div>
            </div>
            <div className='container-contact-logo'>
                <img
                    className='contact-info-logo me-3'
                    src={githublogo}
                    alt='githublogo'
                />
                <div>
                    <h3>Github</h3>
                    <p>https://github.com/LuisPazDev</p>
                </div>
            </div>
        </Container>
    )
}
