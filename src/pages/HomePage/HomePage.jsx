import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap';
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
                    <p>
                        With a background in project management and the creative field, I excel in detailed planning and intuitive design. My diverse roles in marketing and service industries involved managing creative projects for various audiences and stakeholders. I've completed 500+ hours of expert-led software engineering instruction, combining technical knowledge with practical skills.

                    </p>
                    <p>
                        "ianpetercreative" has been my freelancing identity since 2017, spanning photography, videography, graphic design, live event producing, and photo editing. Let's connect if you're seeking a versatile professional for your team or simply want to chat!
                    </p>
                    <Link to="/about" className="button-outline-white">Learn More</Link>
                </Container>
            </div>
            <div className="home-projects">
                <h1>Projects</h1>
                <Container>
                    <Card>This is a card</Card>
                    <Card>This is a card</Card>
                    <Card>This is a card</Card>
                    <Card>This is a card</Card>
                </Container>
            </div>
        </>
    );
}