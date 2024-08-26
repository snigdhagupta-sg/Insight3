import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Preferences from './Preferences';
import WritingPage from './WritingPage';  // Import the WritingPage component
import Home from "./Home.jsx";
import Business from "./Business.jsx"
import Entertainment from "./Entertainment.jsx"
import Health from "./Health.jsx"
import Science from "./Science.jsx"
import Sports from "./Sports.jsx"
import Technology from "./Technology.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/ai-assistant-writing" element={<WritingPage />} /> {/* AI Assistant Writing page route */}
        <Route path="/" element={<SignIn />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;

