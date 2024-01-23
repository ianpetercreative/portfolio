import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/ianpetercreative/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/ianpetercreative" target="_blank" rel="noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/ianpetercreative" target="_blank" rel="noreferrer">
                                <FaInstagram className="social-icon" />
                            </a>
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