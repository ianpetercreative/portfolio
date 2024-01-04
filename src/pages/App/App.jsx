import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';


export default function App() {

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