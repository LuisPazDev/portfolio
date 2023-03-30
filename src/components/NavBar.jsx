import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../styles/NavBar.css"
import logo from "../assets/luispazdevlogo.svg"

export const NavBar = () => {
    return (
        <Navbar className='nav-bar' variant='dark'>
            <Container className='p-1'>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt='logo' className='logo' />
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#skills'>Skills</Nav.Link>
                    <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
