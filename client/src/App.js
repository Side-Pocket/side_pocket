import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from "./Components/HeroSection";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(response => setMessage(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Footer></Footer>

     
    </div>
  );
}

export default App;
