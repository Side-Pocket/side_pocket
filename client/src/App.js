import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from './components/Header';
import Footer from './components/Footer';
// import { Router, Route, Routes } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(response => setMessage(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>

      <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>

    </div>
  );
}

export default App;
