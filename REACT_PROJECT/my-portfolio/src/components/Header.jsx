import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
        <Link to="home" smooth={true} duration={500} offset={-70}>
          My Portfolio
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70}>About Me</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500} offset={-70}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>
    </header>
  );
};

export default Header;
