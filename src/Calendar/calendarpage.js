import React from 'react';
import Calendar from './calendar';
import './calendar.css'; // Import calendar styles

const CalendarPage = () => {
  return (
    <div className="calendarPage">
      <h1>Futuristic Calendar</h1>
      <Calendar />
    </div>
  );
};

export default CalendarPage;