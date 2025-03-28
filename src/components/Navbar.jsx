import React, { useEffect, useState } from "react";
import "../styles/navbar.css"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };

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

  return (
    <div className="navbar">
      <div className="nav-left">
        <h1><a href="#home">Aarohan</a></h1>
        </div>
      <div className="nav-right">
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
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
          className={activeSection === "joinus" ? "active" : ""}
        >
          JOIN US
        </a>
      </div>
    </div>
  );
};

export default Navbar;
