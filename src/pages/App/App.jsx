import { useState } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route, Routes } from "react-router-dom"


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <>
      <main className="App">
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </>
      </main>
    </>
  );
}