import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWindget from '../cartWindget/CartWidget';


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: "50px" }}>Maria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{paddingLeft:"350px", fontSize: "20px"}}>
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#livingComedor">Living y Comedor</NavDropdown.Item>
                            <NavDropdown.Item href="#dormitorioBanio">
                                Dormitorio y Baño
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#acercaDe">Acerca de</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWindget/>
        </Navbar >
    );
}

export default NavBar