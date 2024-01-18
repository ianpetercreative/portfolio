import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <Container className="home-hero">
                <div className="home-hero-info">
                    <h1>Hello, I'm Ian.</h1>
                    <span>SOFTWARE ENGINEER</span>
                    <div>I'm a software engineer with a passion for serving others and solving complex problems.</div>
                </div>
                <div className="home-hero-img">
                    <img src="images/headshot.jpg" alt="" />
                </div>
            </Container>
            <div className="home-about">
                <Container>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur necessitatibus excepturi nam eius velit vero soluta at? Repellendus necessitatibus et consectetur cupiditate ea dolores ducimus aliquam quam ipsum odio?
                        Culpa atque recusandae fuga ipsa iure molestiae non vero natus architecto sequi! At illo laborum eaque odit eligendi hic quo tempore, aut incidunt omnis dolor in dicta cupiditate expedita pariatur.</p>
                    <Link to="/about">Learn More</Link>
                </Container>
            </div>
        </>
    );
}