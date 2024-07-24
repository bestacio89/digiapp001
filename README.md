# React Clock and Timer Application

## Introduction

This guide provides a step-by-step explanation of how to create a React application with two main pages: one for displaying a clock and another for a timer. The application includes routing for navigation between the pages and futuristic styling for a modern look.

## 1. Project Setup

### 1.1 Install Required Packages

To handle routing in our React application, we need to install the `react-router-dom` package. This package enables us to navigate between different components or pages in the app.

**Install `react-router-dom`:**
```bash
npm install react-router-dom
```

## 2. File Structure

Here is a summary of the file structure for the project:

- `src/`
  - `App.js` - Main application component that sets up routing.
  - `ClockPage.js` - Page component that displays the clock.
  - `ClockPage.css` - CSS file for styling `ClockPage`.
  - `TimerPage.js` - Page component that displays the timer.
  - `TimerPage.css` - CSS file for styling `TimerPage`.
  - `Clock.js` - Component that shows the current date and time.
  - `Clock.css` - CSS file for styling the `Clock` component.
  - `Timer.js` - Component that functions as a timer with start/stop capabilities.
  - `Timer.css` - CSS file for styling the `Timer` component.
  - `index.js` - Entry point of the React application.
  - `index.css` - Global CSS file for the entire application.

## 3. Component and Styling Details

### 3.1 `App.js`

**Purpose**: The `App.js` file sets up the routing for the application and includes the navigation links.

**`src/App.js`:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockPage from './ClockPage';
import TimerPage from './TimerPage';
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
```

**Explanation**:
- `BrowserRouter` (aliased as `Router`): Provides the routing functionality.
- `Route`: Defines a route with a path and the component to render for that path.
- `Routes`: Wraps all `Route` elements and handles route rendering based on the current URL.
- `Link`: Used for navigation between routes.

### 3.2 `ClockPage.js`

**Purpose**: Displays the `Clock` component on the `/` route.

**`src/ClockPage.js`:**

```jsx
import React from 'react';
import Clock from './Clock';
import './ClockPage.css';

const ClockPage = () => {
  return (
    <div className="clockPage">
      <h1>Clock</h1>
      <Clock />
    </div>
  );
};

export default ClockPage;
```

**Explanation**:
- Imports the `Clock` component and the associated CSS.
- Renders the `Clock` component inside a `div` with a class name `clockPage`.

### 3.3 `Clock.js`

**Purpose**: Displays the current date and time, formatted in French.

**`src/Clock.js`:**

```jsx
import React, { useState, useEffect } from 'react';
import './Clock.css';

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
```

**Explanation**:
- `useState` and `useEffect` manage and update the current date and time.
- `formatDate` and `formatTime` format the date and time according to French locale.
- `setInterval` updates the time every second.

### 3.4 `ClockPage.css`

**Purpose**: Styles the `ClockPage`.

**`src/ClockPage.css`:**

```css
/* src/ClockPage.css */

.clockPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #00e5ff;
  text-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
}

.clock {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
```

**Explanation**:
- `.clockPage`: Centers the content vertically and horizontally with a gradient background.
- `h1`: Styles the header with a futuristic color and text-shadow effect.
- `.clock`: Styles the clock display with a semi-transparent background and rounded corners.

### 3.5 `Clock.css`

**Purpose**: Styles the `Clock` component.

**`src/Clock.css`:**

```css
/* src/Clock.css */

.clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
}

.date {
  font-size: 2em;
  margin-bottom: 10px;
}

.time {
  font-size: 4em;
  font-weight: bold;
}
```

**Explanation**:
- `.clock`: Centers the date and time inside the clock display.
- `.date` and `.time`: Styles for the date and time with appropriate font sizes.

### 3.6 `TimerPage.js`

**Purpose**: Displays the `Timer` component on the `/timer` route.

**`src/TimerPage.js`:**

```jsx
import React from 'react';
import Timer from './Timer';
import './TimerPage.css';

const TimerPage = () => {
  return (
    <div className="timerPage">
      <h1>Timer</h1>
      <Timer />
    </div>
  );
};

export default TimerPage;
```

**Explanation**:
- Imports the `Timer` component and the associated CSS.
- Renders the `Timer` component inside a `div` with a class name `timerPage`.

### 3.7 `Timer.js`

**Purpose**: Provides a timer with start/stop functionality.

**`src/Timer.js`:**

```jsx
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 10);
    } else if (!running && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (seconds) => {
    const milliseconds = Math.floor((seconds % 1000) / 10);
    const totalSeconds = Math.floor(seconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);

    return (
      `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(totalSeconds % 60).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
    );
  };

  return (
    <div className="timer">
      <div className="time">{formatTime(seconds)}</div>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button

>
    </div>
  );
};

export default Timer;
```

**Explanation**:
- `useState` and `useEffect` manage the timer’s state and update it.
- `setInterval` increases the timer every 10 milliseconds when running.
- `formatTime` converts the timer value into hours, minutes, seconds, and milliseconds.

### 3.8 `TimerPage.css`

**Purpose**: Styles the `TimerPage`.

**`src/TimerPage.css`:**

```css
/* src/TimerPage.css */

.timerPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1d1d1d, #333);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #00e5ff;
  text-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
}

.timer {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
```

**Explanation**:
- `.timerPage`: Centers the content with a gradient background.
- `h1`: Styles the header with a color and text-shadow effect.
- `.timer`: Styles the timer display with a semi-transparent background and rounded corners.

### 3.9 `Timer.css`

**Purpose**: Styles the `Timer` component.

**`src/Timer.css`:**

```css
/* src/Timer.css */

.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
}

.time {
  font-size: 4em;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  background-color: #00e5ff;
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00bcd4;
}
```

**Explanation**:
- `.timer`: Centers the timer display.
- `.time`: Styles the timer display with a large font size.
- `button`: Styles the start/stop button with color and hover effects.

## 4. Final Steps

1. **Ensure All Files Are Correctly Imported**: Make sure that all component files and their CSS files are correctly imported into `App.js`.

2. **Start the Development Server**:
   Run the following command to start the React development server and view the application in your browser:
   ```bash
   npm start
   ```

3. **Verify Functionality**:
   - Navigate to `/` to see the Clock page.
   - Navigate to `/timer` to see the Timer page.
   - Test the clock and timer to ensure they work as expected.

---

