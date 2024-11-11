// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage/Home';

const App = () => {
  return (
    <Router>
      <Header /> {/* The header will appear on every page */}
      <main className="pt-18 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer /> {/* The footer will appear on every page */}
    </Router>
  );
};

export default App;
