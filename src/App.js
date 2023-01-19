import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home"
import Race from "./pages/race"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/race" element={<Race />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
