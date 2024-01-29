import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'
import { useRef, useState } from 'react';

export default function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const isWorkPage = location.pathname === '/work';
    const isContactPage = location.pathname === '/contact'

    const [offCanvasNav, setOffCanvasNav] = useState(false)
    const offcanvasRef = useRef();

    function handleToggle(){
        setOffCanvasNav(!offCanvasNav)
    }

    function handleCloseNav(){
        setOffCanvasNav(false)
    }

    const handleCloseOffcanvas = () => {
      if (offcanvasRef.current) {
        offcanvasRef.current.hide();
      }
    };

    return (
        <>
            <Navbar key="sm" expand="sm" className="mb-3">
                <Container fluid>
                    <Link className="navbar-brand-wrap" to="/">
                        <Navbar.Brand>ianpetercreative</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={handleToggle} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        show={offCanvasNav}
                        onHide={handleCloseOffcanvas}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                ianpetercreative
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1">
                                <Nav.Item>
                                    <Link to="/" 
                                    className={`nav-link ${isHomePage ? 'active' : ''}`}
                                    onClick={handleToggle}
                                    >Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/about" 
                                    className={`nav-link ${isAboutPage ? 'active' : ''}`}
                                    onClick={handleToggle}
                                    >About</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/work" 
                                    className={`nav-link ${isWorkPage ? 'active' : ''}`}
                                    onClick={handleToggle}
                                    >Work</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/contact" 
                                    className={`nav-link ${isContactPage ? 'active' : ''}`}
                                    onClick={handleToggle}
                                    >Contact</Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}