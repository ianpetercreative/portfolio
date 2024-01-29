import './Projects.css'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

export default function CheckersPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Container>
                <div className="project-title">
                    <h1>Checkers</h1>
                    <span>Full Stack</span>
                </div>
                <div className="project-details">
                    <div className="description">
                        <h1>Project Overview</h1>
                        I developed a digital version of the classic two-player strategy board game, Checkers, combining simplicity and complexity for players of all ages. The objective is to strategically eliminate opponents' pucks, emphasizing strategic thinking, planning, and tactical execution. Suitable for both casual and competitive players, my Checkers game offers an intellectually stimulating and engaging experience. Explore the screenshots to witness the game in action and get ready to make your move in this age-old battle of wits on the digital board.
                    </div>
                    <div className="tech">
                        <h1>Technologies Used</h1>
                        <div className="tech-list">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='project-buttons'>
                    <a className='button-blue' href="https://ianpetercreative.github.io/checkers/">Deployed Site</a>
                    <a className='button-blue' href="https://github.com/ianpetercreative/checkers">Github</a>
                </div>
                <div className="project-screenshots">
                    <h1>Screenshots</h1>
                    <div className="web-screenshots">
                        <img src="/images/checkers/starting-position.png" alt="starting position" />
                        <img src="/images/checkers/legal-moves.png" alt="legal moves" />
                        <img src="/images/checkers/jumps-available.png" alt="jumps available" />
                        <img src="/images/checkers/king-4.png" alt="king movement" />
                        <img src="/images/checkers/win-2.png" alt="win screen" />
                    </div>
                </div>
                <hr />
                <div className='project-buttons'>
                    <a className='button-blue' href="https://ianpetercreative.github.io/checkers/">Deployed Site</a>
                    <a className='button-blue' href="https://github.com/ianpetercreative/checkers">Github</a>
                </div>
            </Container>
            <div className='project-nav'>
                <Link to="/work">
                    <div className='nav-arrow'>&larr; See All Work</div>
                </Link>
                <Link to="/work/rehomr">
                    <div className='nav-arrow'>reHomr &rarr;</div>
                </Link>
            </div>
        </>
    );
}