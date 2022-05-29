import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './components/main-page/MainPage';
import NotFoundPage from './components/not-found-page/NotFoundPage';
import AboutPage from './components/about-page/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="py-4 px-6 text-sm font-medium bg-slate-800">
            <ul className="flex space-x-3">
              <li>
                <Link to="/" className="text-base font-medium text-cyan-500 hover:text-cyan-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base font-medium text-cyan-500 hover:text-cyan-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
