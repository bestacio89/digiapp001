// src/App.js

import React from 'react';
import Clock from './clock';
import Timer from './timer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Clock App</h1>
      <Clock />
      <p>C'est génial tout</p>
      <Timer />
    </div>
  );
};

export default App;
