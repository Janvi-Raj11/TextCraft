import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Footer from "./Components/Footer";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); 
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); 
      document.body.style.backgroundColor = "#1e1e2f"; 
      displayAlert("Dark mode has been enabled", "success"); 
    } else {
      setMode("light"); 
      document.body.style.backgroundColor = "white"; 
      displayAlert("Light mode has been enabled", "success"); 
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router basename="/TextCraft">
        <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} displayAlert={displayAlert} />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Welcome to Your All-in-One Text Utility – Easily Analyze, Edit, and Clean Your Text" 
                  // subheading="Use TextCraft to count words, convert text case, remove extra spaces, extract emails, estimate reading time, and more — all in your browser, instantly."
                  mode={mode}
                  displayAlert={displayAlert}
                />
              }
            />
          </Routes>
        </div>
        <Footer mode={mode} />
      </Router>
    </div>
  );
}

export default App;
