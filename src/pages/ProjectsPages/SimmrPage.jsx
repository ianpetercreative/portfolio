import './Projects.css'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

export default function SimmrPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Container>
                <div className="project-title">
                    <h1>Simmr</h1>
                    <span>Full Stack & UI/UX</span>
                </div>
                <div className="project-details">
                    <div className="description">
                        <h1>Project Overview</h1>
                        Simmr is a dynamic web application designed to unite food enthusiasts. Simmr offers a user-friendly interface that encourages members to share their culinary creations and try out recipes from fellow community members. With visually engaging features, Simmr transforms each visit into a delightful and inspiring experience for food enthusiasts of all levels.
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
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className="tech-used-2">
                                <ul>
                                    <h2>Other Tools</h2>
                                    <li>Amazon S3</li>
                                    <li>Bootstrap</li>
                                    <li>Figjam</li>
                                    <li>Heroku</li>
                                    <li>Trello</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-buttons'>
                    <a className='button-blue' href="https://simmr-a4e862a95079.herokuapp.com/">Deployed Site</a>
                    <a className='button-blue' href="https://github.com/ianpetercreative/simmr">Github</a>
                </div>
                <div className="project-screenshots">
                    <h1>Web Screenshots</h1>
                    <div className="web-screenshots">
                        <img src="/images/simmr/landing-page.png" alt="landing page" />
                        <img src="/images/simmr/recipes-index.png" alt="recipes page" />
                        <img src="/images/simmr/recipe-detail.png" alt="recipe detail page" />
                    </div>
                </div>
                <hr />
                <div className='project-buttons'>
                    <a className='button-blue' href="https://simmr-a4e862a95079.herokuapp.com/">Deployed Site</a>
                    <a className='button-blue' href="https://github.com/ianpetercreative/simmr">Github</a>
                </div>
            </Container>
                <div className='project-nav'>
                    <Link to="/work/reHomr">
                        <div className='nav-arrow'>&larr; reHomr</div>
                    </Link>
                    <Link to="/work/trailhead">
                        <div className='nav-arrow'>The Trailhead &rarr;</div>
                    </Link>
                </div>
        </>
    );
}