import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css'; // Optional: Custom styles for the calendar

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 6 || day === 0; // 6 is Saturday, 0 is Sunday
  };

  return (
    <div className="calendar">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
        dateFormat="MMMM d, yyyy"
      />
      {selectedDate && isWeekend(selectedDate) && (
        <p className="message">Cette prochaine date est bien</p>
      )}
    </div>
  );
};

export default Calendar;
