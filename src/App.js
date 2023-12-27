import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import HowToHelp from "./components/HowToHelp";
import LandingPage from "./components/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-to-help" element={<HowToHelp />} />
      </Routes>
    </Router>
  );
}

export default App;
