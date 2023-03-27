import { HeaderText } from "./HeaderText"
import { HeaderImg } from "./HeaderImg"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/Header.css"

export const Header = () => {
    return (
        <Container fluid className='container-header p-5'>
            <Row>
                <Col>
                    <HeaderText />
                </Col>
                <Col>
                    <HeaderImg />
                </Col>
            </Row>
        </Container>
    )
}
