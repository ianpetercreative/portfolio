import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className="grid">
                <h1 className="home-hero">Software Engineer with a passion for serving others and solving complex problems</h1>
                <Link to="/work" className="nav-link btn btn-black-2">View Work</Link>
            </div>
        </>
    );
}