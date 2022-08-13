import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Events from "./components/events";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import ScrollToTop from './components/ScrollToTop';
import About from "./components/about";
import Projects from "./components/projects";
import Astrophotography from "./components/astrophotography";
import Instruments from "./components/instruments";
import "./components/navbar/navbar.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/instruments" element={<Instruments />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/astrophotography" element={<Astrophotography />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
