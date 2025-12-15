import './App.css'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/FooteKLEFKEFLHKFHr'
import Portfolio from './Components/Portfolio'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
