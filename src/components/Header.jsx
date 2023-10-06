import { HeaderText } from "./HeaderText"
import { HeaderImg } from "./HeaderImg"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/Header.css"

export const Header = () => {
    return (
        <Container fluid id='home' className='container-header p-5'>
            <Row xs={1} md={1} lg={2}>
                <Col className='d-flex justify-content-center align-items-center p-4 mb-5'>
                    <HeaderText />
                </Col>
                <Col className='d-flex justify-content-center align-items-center mb-5'>
                    <HeaderImg />
                </Col>
            </Row>
        </Container>
    )
}
