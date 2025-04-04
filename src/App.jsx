import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apply from './pages/Apply';
import About from './pages/About';
import Teams from './pages/Teams';
import News from './pages/News';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import MissEarth from './pages/MissEarth';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<News />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/miss-earth" element={<MissEarth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
