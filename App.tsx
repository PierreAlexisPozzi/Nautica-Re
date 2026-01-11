
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import Permis from './pages/Permis';
import Location from './pages/Location';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/permis" element={<Permis />} />
            <Route path="/location" element={<Location />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Simple redirection for coaching to contact since it's a specific lead segment */}
            <Route path="/coaching" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </Router>
  );
};

export default App;
