import './Projects.css'
import { Container } from "react-bootstrap";
export default function ReHomrPage() {
    return (
        <>
            <Container>
                <div className="project-title">
                    <h1>reHomr</h1>
                    <span>Front End & UI/UX</span>
                </div>
                <div className="project-details">
                    <div className="description">
                        <h1>Project Overview</h1>
                        reHomr is a web application designed to streamline the process of connecting pets in need of a home with individuals or families looking to adopt. The platform serves as a bridge between pet owners or rescue organizations and potential adopters, facilitating the adoption process and providing a centralized space for users to explore, learn about, and connect with pets.
                    </div>
                    <div className="tech">
                        <h1>Technologies Used</h1>
                        <div className="tech-list">
                            <div className="tech-used-1">
                                <ul>
                                    <h2>Frontend</h2>
                                    <li>React.js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <ul>
                                <h2>Backend</h2>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="tech-used-2">
                                <ul>
                                <h2>Other Tools</h2>
                                    <li>Bootstrap</li>
                                    <li>AJAX/Axios</li>
                                    <li>Trello</li>
                                    <li>Figjam</li>
                                    <li>Heroku</li>
                                    <li>Google Maps API</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="project-screenshots">
                    <h1>Web Screenshots</h1>
                    <div className="web-screenshots">
                        <img src="/images/rehomr/web-screenshots/home.png" alt="home page" />
                        <img src="/images/rehomr/web-screenshots/login.png" alt="login page" />
                        <img src="/images/rehomr/web-screenshots/pet-detail.png" alt="pet detail page" />
                        <img src="/images/rehomr/web-screenshots/map.png" alt="map" />
                        <img src="/images/rehomr/web-screenshots/pets-available.png" alt="pets list page" />
                    </div>
                    <br />
                    <br />
                    <h1>Mobile Screenshots</h1>
                    <div className="mobile-screenshots">
                        <img src="/images/rehomr/mobile-screenshots/mobile-home.png" alt="mobile home page" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-login.png" alt="mobile login page" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-signup.png" alt="mobile sign up page" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-nav.png" alt="mobile nav" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-pet-detail.png" alt="mobile pet detail 1" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-pet-detail2.png" alt="mobile pet detail 2" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-pets-available.png" alt="mobile pets list 1" />
                        <img src="/images/rehomr/mobile-screenshots/mobile-pets-available2.png" alt="mobile pets list 2" />
                    </div>
                </div>
                <div className='project-buttons'>

                </div>
                <div className='project-nav'>

                </div>
            </Container>
        </>
    );
}