import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(response => setMessage(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div><Header></Header></div>
      <Footer></Footer>
      <p>{message}</p>
    </div>
  );
}

export default App;
