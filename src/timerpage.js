// src/TimerPage.js

import React from 'react';
import Timer from './timer';
import './timerpage.css'; // Optional: Custom styles for the page

const TimerPage = () => {
  return (
    <div className="timerPage">
      <h1>Timer Page</h1>
      <Timer />
    </div>
  );
};

export default TimerPage;
