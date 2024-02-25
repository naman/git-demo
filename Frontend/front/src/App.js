import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// import components
import DestinationForm from './components/DestinationForm';
import Weather from './components/Weather/index.jsx';
import Report from './components/Report';
import SixHourReport from './components/SixHourReport';
import EightHourReport from './components/EightHourReport';
import NineHourReport from './components/NineHourReport';
import CommunityTips from './components/CommunityTips';
import DrivingSummary from './components/DrivingSummary';
import FeelUnwell from './components/FeelUnwell';
import AppointmentSuccess from './components/AppointmentSuccess';
import SummaryQuestion from './components/SummaryQuestion';
import DestinationConfirmation from './components/DestinationConfirmation';
import DestinationSuccess from './components/DestinationSuccess';





// Define the main App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <h1>Welcome to Schneider Truck</h1>
            </header>
            <nav className="App-nav">
           <Link to="/destination" className="nav-button">Enter Your Destination</Link>
              <Link to="/report" className="nav-button">Report Time</Link>
              <Link to="/weather" className="nav-button">Weather Today</Link>
              <Link to="/about_us" className="nav-button">About US</Link>
              <Link to="/community_tips" className="nav-button">Community Tips</Link>
              <Link to="/driving_summary" className="nav-button">Driving Summary</Link>
              <Link to="/community_support" className="nav-button">Community Support</Link>
            </nav>
          </div>
        } />
          <Route path="/destination" element={<DestinationForm />} />
          <Route path="/destination/confirmation" element={<DestinationConfirmation />} />
          <Route path="/destination/success" element={<DestinationSuccess />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report/6hour" element={<SixHourReport />} />
          <Route path="/report/8hour" element={<EightHourReport />} />
          <Route path="/report/9hour" element={<NineHourReport />} />
          <Route path="/community_tips" element={<CommunityTips />} />
          <Route path="/driving_summary" element={<DrivingSummary />} />
          <Route path="/feel_unwell" element={<FeelUnwell />} />
          <Route path="/summary_question" element={<SummaryQuestion />} />
          <Route path="/feel_unwell" element={<FeelUnwell />} />
          <Route path="/appointment_success" element={<AppointmentSuccess />} />
          <Route path="/summary_question" element={<SummaryQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
