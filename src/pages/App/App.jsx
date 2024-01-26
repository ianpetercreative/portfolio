import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage'
import WorkIndexPage from '../WorkIndexPage/WorkIndexPage'
import ContactPage from '../ContactPage/ContactPage'
import CheckersPage from '../ProjectsPages/CheckersPage';
import SimmrPage from '../ProjectsPages/SimmrPage';
import TrailheadPage from '../ProjectsPages/TrailheadPage';
import ReHomrPage from '../ProjectsPages/reHomrPage';


export default function App() {

  return (
    <>
      <main className="App">
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkIndexPage />} />
            <Route path="/work/checkers" element={<CheckersPage />} />
            <Route path="/work/rehomr" element={<ReHomrPage />} />
            <Route path="/work/simmr" element={<SimmrPage />} />
            <Route path="/work/trailhead" element={<TrailheadPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </>
      </main>
    </>
  );
}