import React from "react";
import { Routes, Route } from "react-router-dom";
// Components:
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Routes:
import Home from "./Routes/Home";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";
import Locations from "./Routes/Locations";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
      <Footer />
      {/* <Hero />
      <Adv />
      <Footer /> */}
    </>
  );
}

export default App;
