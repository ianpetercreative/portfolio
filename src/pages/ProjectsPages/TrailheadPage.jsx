import './Projects.css'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

export default function TrailheadPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Container>
                <div className="project-title">
                    <h1>The Trailhead</h1>
                    <span>Full Stack & UI/UX</span>
                </div>
                <div className="project-details">
                    <div className="description">
                        <h1>Project Overview</h1>
                        The Trailhead App is a web application that helps outdoor enthusiasts discover and share their favorite hiking trails. Users can browse a collection of hiking trails, view trail details, leave reviews, and add new trails to the database. Whether you're looking for your first trail or a new place to explore, this app will help you find your next adventure.
                    </div>
                    <div className="tech">
                        <h1>Technologies Used</h1>
                        <div className="tech-list">
                            <div className="tech-used-1">
                                <ul>
                                    <h2>Frontend</h2>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <ul>
                                    <h2>Backend</h2>
                                    <li>Express.js</li>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Passport.js</li>
                                </ul>
                            </div>
                            <div className="tech-used-2">
                                <ul>
                                    <h2>Other Tools</h2>
                                    <li>EJS (Embedded JavaScript)</li>
                                    <li>Figjam</li>
                                    <li>Heroku</li>
                                    <li>Trello</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-buttons'>
                    <a className='button-blue' href="https://github.com/ianpetercreative/the-trailhead" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="project-screenshots">
                    <h1>Web Screenshots</h1>
                    <div className="web-screenshots">
                        <img src="/images/trailhead/hikes-index.png" alt="hikes list" />
                        <img src="/images/trailhead/show-1.png" alt="hikes detail page" />
                        <img src="/images/trailhead/show-2.png" alt="hikes reviews" />
                        <img src="/images/trailhead/add-1.png" alt="add a hike form 1" />
                        <img src="/images/trailhead/add-2.png" alt="add a hike form 2" />
                    </div>
                </div>
                <hr />
                <div className='project-buttons'>
                    <a className='button-blue' href="https://github.com/ianpetercreative/the-trailhead" target="_blank" rel="noreferrer">Github</a>
                </div>
            </Container>
            <div className='project-nav'>
                <Link to="/work/simmr">
                    <div className='nav-arrow'>&larr; Simmr</div>
                </Link>
            </div>
        </>
    );
}