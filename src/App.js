import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockPage from './Components/Clock/clockpage';
import TimerPage from './Components/Timer/timerpage';
import CalendarPage from './Components/Calendar/calendarpage';
import UserFormPage from './Components/Form/formpage';
import CompClientsPage from './Components/Clients/compclientpage'; // Import CompClientsPage
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
            <li><Link to="/clients">Clients</Link></li> {/* Added link for CompClientsPage */}
          </ul>
        </nav>
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ClockPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/form" element={<UserFormPage />} />
            <Route path="/clients" element={<CompClientsPage />} /> {/* Added route for CompClientsPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
