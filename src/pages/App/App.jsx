import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage'
import WorkIndexPage from '../WorkIndexPage/WorkIndexPage'
import ContactPage from '../ContactPage/ContactPage'


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
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </>
      </main>
    </>
  );
}