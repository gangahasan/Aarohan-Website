import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import Partners from "./pages/Partners";
import Supporters from "./pages/Supporters";
import Donate from "./pages/Donate";
import JoinUs from "./pages/JoinUs";
import Home from "./pages/Home";
import "./App.css"
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main-body">
      <Navbar />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="mentors" className="section">
        <Mentors />
      </section>
      <section id="partners" className="section">
        <Partners />
      </section>
      <section id="supporters" className="section">
        <Supporters />
      </section>
      <section id="donate" className="section">
        <Donate />
     
      </section>
      <section id="join" className="section">
        <JoinUs />
      </section>
      <Footer />
    </div>
  );
};

export default App;
