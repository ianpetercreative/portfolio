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
                    <div className="work-card-gradient">
                        <h2>reHomr</h2>
                        <h3>A custom built pet adoption platform</h3>
                        <img src="images/rehomr/xan-griffin-UCFgM_AojFg-unsplash.jpg" alt="rehomr landing page" />
                    </div>
                </Link>
                <Link to="/" className="card work-card">
                    <div className="work-card-gradient">
                        <h2>reHomr</h2>
                        <h3>A custom built pet adoption platform</h3>
                        <img src="images/rehomr/xan-griffin-UCFgM_AojFg-unsplash.jpg" alt="rehomr landing page" />
                    </div>
                </Link>
                <Link to="/" className="card work-card">
                    <div className="work-card-gradient">
                        <h2>reHomr</h2>
                        <h3>A custom built pet adoption platform</h3>
                        <img src="images/rehomr/xan-griffin-UCFgM_AojFg-unsplash.jpg" alt="rehomr landing page" />
                    </div>
                </Link>
                <Link to="/" className="card work-card">
                    <div className="work-card-gradient">
                        <h2>reHomr</h2>
                        <h3>A custom built pet adoption platform</h3>
                        <img src="images/rehomr/xan-griffin-UCFgM_AojFg-unsplash.jpg" alt="rehomr landing page" />
                    </div>
                </Link>
            </section>
        </>
    );
}