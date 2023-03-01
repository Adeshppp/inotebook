import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert/>
        <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
