import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <Navbar key="sm" expand="sm" className="mb-3">
                <Container fluid>
                    <Link to="/">
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/about" className="nav-link">About</Link>
                                <Link to="/work" className="nav-link">Work</Link>
                                <Link to="/contact" className="nav-link">contact</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}