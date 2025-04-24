import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Species from './components/Species';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FishCategory from './components/FishCategory';
import Founder from './components/Founder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#001e2e] to-[#003851] text-gray-100 relative">
        <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Species />
              <Founder />
              <Contact />
              <CtaSection />
            </main>
          } />
          <Route path="/fish-species" element={<FishCategory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;