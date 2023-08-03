import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.scss";

function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />

      <div className="wrapper">
        {/* <!-- dark mode toggler --> */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
        {/* <!-- Header --> */}
        <Header />
        {/* <!-- Hero --> */}
        <Hero />
        {/* <!-- Skills --> */}
        <Skills />
        {/* <!-- Projects --> */}
        <Projects />
        {/* <!-- About Me --> */}
        <About />
        {/* <!-- Contact --> */}
        <Contact />
        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
