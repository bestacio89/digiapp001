import React, { useState, useEffect } from 'react';
import './clock.css'; // Ensure you have this CSS file for styling

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString('fr-FR', options);
  };

  return (
    <div className="clock">
      <div className="date">{formatDate(dateTime)}</div>
      <div className="time">{formatTime(dateTime)}</div>
    </div>
  );
};

export default Clock;
