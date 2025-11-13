import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import CreateBuddy from "./Components/CharacterPage";
import SignUp from "./Components/SignUpPage";
import LandingScreen from "./Components/LandingScreen";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateBuddy />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;