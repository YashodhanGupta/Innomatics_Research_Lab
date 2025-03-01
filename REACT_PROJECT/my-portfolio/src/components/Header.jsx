import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${!isScrolled ? "transparent" : "black-bg"}`}>
      <div className="logo">
        <a href="#home">My Portfolio</a> {/* This link will scroll to the #home section */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li> {/* Ensure this points to the correct section */}
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
