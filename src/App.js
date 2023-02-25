import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
