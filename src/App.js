import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";

import Home from "./components/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />}/>

        <Route path="/" element={<Home />}/>
          
      </Routes>
    </Router>
    
    
    
      
    </>
  );
}

export default App;
