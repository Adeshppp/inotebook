// Importing CSS styles, components and context from their respective files
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { Home } from "./components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

// Defining App function component
function App() {
  // Setting up a state variable 'alert' and a function to update it
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // Setting up a timeout to hide the alert after 4 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  // Rendering the app
  return (
    <NoteState>
      <Router>
        {/* Rendering Alert and Navbar components */}
        <Alert alert={alert} />
        <Navbar showAlert={showAlert} />
        {/* Rendering Routes */}
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App; // Exporting App function component
