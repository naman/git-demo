
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Define the Weather component

function Weather() {
    return (
      <div className="weather-container">
        <h1>Today's weather is:</h1>
        <Link to="/" className="back-button">Back to Main Page</Link>
      </div>
    );
  }


export default Weather;