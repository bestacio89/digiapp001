import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockPage from './clockpage';
import TimerPage from './timerpage';
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Clock</Link></li>
            <li><Link to="/timer">Timer</Link></li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<ClockPage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
