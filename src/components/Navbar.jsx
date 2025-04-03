import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, rootMargin: "0px", threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="nav-left">

            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Aarohan
            </a>
        </div>
        <div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            ABOUT
          </a>
          <a
            href="#mentors"
            className={activeSection === "mentors" ? "active" : ""}
          >
            MENTORS
          </a>
          <a
            href="#partners"
            className={activeSection === "partners" ? "active" : ""}
          >
            PARTNERS
          </a>
          <a
            href="#supporters"
            className={activeSection === "supporters" ? "active" : ""}
          >
            SUPPORTERS
          </a>
          <a
            href="#donate"
            className={activeSection === "donate" ? "active" : ""}
          >
            DONATE
          </a>
          <a
            href="#joinus"
            className={activeSection === "join" ? "active" : ""}
          >
            JOIN US
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
