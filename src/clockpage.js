// src/ClockPage.js

import React from 'react';
import Clock from './clock';
import './clockpage.css'; // Optional: Custom styles for the page

const ClockPage = () => {
  return (
    <div className="clockPage">
      <h1>Clock Page</h1>
      <Clock />
    </div>
  );
};

export default ClockPage;
