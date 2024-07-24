// src/Timer.js

import React, { useState, useRef } from 'react';
import './timer.css';

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const timerID = useRef(null);
  const startTime = useRef(null);

  const startStopTimer = () => {
    if (running) {
      clearInterval(timerID.current);
    } else {
      startTime.current = Date.now() - timeElapsed;
      timerID.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTime.current);
      }, 10);
    }
    setRunning(!running);
  };

  const resetTimer = () => {
    clearInterval(timerID.current);
    setTimeElapsed(0);
    setRunning(false);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const remainingMilliseconds = (milliseconds % 1000).toString().padStart(3, '0');
    return `${minutes}:${seconds}:${remainingMilliseconds}`;
  };

  return (
    <div className="timer">
      <div className="timeElapsed">{formatTime(timeElapsed)}</div>
      <button className={`startStopButton ${running ? 'stop' : 'start'}`} onClick={startStopTimer}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button className="resetButton" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
