import { HeaderText } from "./HeaderText"
import { HeaderImg } from "./HeaderImg"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/Header.css"

export const Header = () => {
    return (
        <Container fluid id='home' className='container-header p-5'>
            <Row className='mt-4 mb-5' xs={1} md={1} lg={2} xl={2}>
                <Col className='mt-3'>
                    <HeaderText />
                </Col>
                <Col>
                    <HeaderImg />
                </Col>
            </Row>
        </Container>
    )
}
