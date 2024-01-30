import { Container } from 'react-bootstrap';
import './AboutPage.css'
import ContactForm from '../../components/ContactForm/ContactForm';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useEffect } from 'react';


export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Container className="about-hero">
                <div className="about-hero-img">
                    <img src="images/5A1A2179.JPG" alt="" />
                </div>
                <div className="about-hero-info">
                    <h1>Hi there!</h1>
                    <div>My name is <span>Ian MacDonald</span>. Fueled by a passion to serve others, I have a deep desire to help solve problems and continuously improve my work.</div>
                    <p>Learn more about my journey below. </p>
                </div>
            </Container>
            <Container className="about-journey">
                <h1>My Journey So Far</h1>
                <p>
                    I am a Software Engineer based in Denver with a passion for serving others and solving complex problems. My prior experience in the creative field and as a project manager helped me develop skills in problem-solving, detailed planning, and intuitive design. I want to use those strengths to solve problems and create products that inspire others.
                </p>
                <p>
                    I’ve held a variety of creative positions in the marketing and service industries, where I’ve been responsible for delivering everything from all creative aspects of programs for audiences of 600+ to managing creatives and projects while communicating with key stakeholders.
                </p>
                <p>
                    In addition, I’ve completed 500+ hours of expert-led instruction, gaining in-depth knowledge and practical skills in software engineering topics and languages.
                </p>
                <p>
                    If you’re wondering where “ianpetercreative” comes from, that is the name I have used for freelancing since 2017. My work in photography, videography, graphic design, live event producing, and photo editing has taken my work across several states and provided me the opportunity to pursue my dream of becoming a software engineer while keeping a foot in the creative world where my journey started.
                </p>
                <p>
                    Whether you’re looking for someone to fill a role in your company, a new connection in the industry, or a hiking buddy, please reach out! I’d love to connect.
                </p>
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
            <div className="about-contact">
                <Container>
                    <h1>Contact</h1>
                    <ContactForm />
                </Container>
            </div>
        </>
    );
}