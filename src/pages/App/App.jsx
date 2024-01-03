import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <>
      <main className="App">
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </>
      </main>
    </>
  );
}