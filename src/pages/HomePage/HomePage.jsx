import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <section className="home-hero-wrap">
                <div className="container">
                    <h1>Software Engineer with a passion for serving others and solving complex problems</h1>
                    <Link to="/work" className="btn btn-black-jumbo">View Work</Link>
                </div>
            </section>
            <section className="container work-grid">
                <Link to="/" className="card work-card">
                    <div>
                        <h2>reHomr</h2>
                        <h3>A custom built pet adoption platform</h3>
                        <img src="images/rehomr/web-screenshots/home.png" alt="rehomr landing page" />
                    </div>
                </Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
            </section>
        </>
    );
}