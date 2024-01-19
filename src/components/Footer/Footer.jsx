import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                        <div className="socials">
                            <Link to="#">
                                <FaLinkedin className="social-icon" />
                            </Link>
                            <Link to="#">
                                <FaGithub className="social-icon" />
                            </Link>
                            <Link to="#">
                                <FaInstagram className="social-icon" />
                            </Link>
                        </div>
                    <div className="links">
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/about" className="footer-link">About</Link>
                        <Link to="/work" className="footer-link">Work</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </div>
                </Container>
            </footer>
        </>
    )
}