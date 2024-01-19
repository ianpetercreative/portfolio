import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <div className="left">
                        <div className="">
                            <Link to="/">
                                <h4>ianpetercreative</h4>
                            </Link>
                        </div>
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
                    </div>
                    <div className="right">

                    </div>
                </Container>
                <div className="text-center mt-3">
                    &copy; 2024 ianpetercreative. All rights reserved.
                </div>
            </footer>
        </>
    )
}