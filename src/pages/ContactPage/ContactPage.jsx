import ContactForm from "../../components/ContactForm/ContactForm";
import { Container } from 'react-bootstrap'
import './ContactPage.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function ContactPage() {
    return (
        <>
            <Container className="contact-hero">
                <h1>Contact</h1>
                <div className="contact-form-wrap">
                    <ContactForm />
                </div>
            </Container>
            <Container className="contact-socials">
                <h2>Connect on Socials:</h2>
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
            </Container>
        </>
    );
}