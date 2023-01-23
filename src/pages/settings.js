import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Home from "./pages/home"
import Race from "./pages/race"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/race" element = {<Race />} />
          
          {/* Redirects to home page by default*/}
          <Route path = "*" element = {<Navigate to = "/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
