import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockPage from './Clock/clockpage';
import TimerPage from './Timer/timerpage';
import CalendarPage from './Calendar/calendarpage';
import UserFormPage from './Form/formpage';
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
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ClockPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/form" element={<UserFormPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
