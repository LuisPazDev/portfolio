import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import menuicon from "../assets/menu.svg"
import "../styles/NavBar.css"
import logo from "../assets/luispazdevlogo.svg"

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' className='nav-bar' variant='dark'>
            <Container fluid className='ms-4 me-4'>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt='logo' className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                    <img
                        style={{ width: "30px", height: "30px" }}
                        src={menuicon}
                        alt='menu.svg'
                    />
                </Navbar.Toggle>

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
