import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <Navbar key="sm" expand="sm" className="mb-3">
                <Container fluid>
                    <Link className="navbar-brand-wrap" to="/">
                        <Navbar.Brand>ianpetercreative</Navbar.Brand>
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
                            <Nav className="flex-grow-1">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/about" className="nav-link">About</Link>
                                <Link to="/work" className="nav-link">Work</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}