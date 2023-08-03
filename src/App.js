import React from "react";

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.scss";

function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
        {/* 
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        <Header />

        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
