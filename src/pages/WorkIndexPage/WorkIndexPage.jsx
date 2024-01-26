import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap';
import './WorkIndexPage.css'

export default function WorkIndexPage() {
    return (
        <>
            <div className="projects-wrap">
                <h1>Projects</h1>
                <span>(sorted alphabetically)</span>
                <Container>
                    <Link to="/work/checkers">
                        <Card>
                            <Card.Img variant="top" src="images/checkers/starting-position.png" />
                            <Card.Body>
                                <Card.Title>
                                    Checkers
                                </Card.Title>
                                <Card.Text>
                                    A digital rendition of the classic two-player strategy board game.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/work/rehomr">
                        <Card>
                            <Card.Img variant="top" src="images/rehomr/web-screenshots/home.png" />
                            <Card.Body>
                                <Card.Title>
                                    reHomr
                                </Card.Title>
                                <Card.Text>
                                    A web application designed to streamline the pet adoption process.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/work/simmr">
                        <Card>
                            <Card.Img variant="top" src="images/simmr/landing-page.png" />
                            <Card.Body>
                                <Card.Title>
                                    Simmr
                                </Card.Title>
                                <Card.Text>
                                    A web application for sharing and reviewing your favorite recipes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/work/trailhead">
                        <Card>
                            <Card.Img variant="top" src="images/trailhead/show-1.png" />
                            <Card.Body>
                                <Card.Title>
                                    The Trailhead
                                </Card.Title>
                                <Card.Text>
                                    A web application that helps outdoor enthusiasts discover and share their favorite hiking trails.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Container>
            </div>        </>
    );
}