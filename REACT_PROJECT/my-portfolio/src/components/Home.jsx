import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import About from "./About"; // Import About component
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 100; // Total number of stars
    let newStars = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100 + "vw", // Random horizontal position
        size: Math.random() * 7 + 1 + "px", // Varying star sizes
        animationDuration: Math.random() * 20 + 10 + "s", // Slower movement
        animationDelay: Math.random() * 5 + "s", // Delayed start for smooth effect
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div id="home"> {/* Ensure you have this id */}
      {/* Home Section with Stars */}
      <div className="home-section">
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
              }}
            ></div>
          ))}
        </div>

        {/* Home Content */}
        <div className="home-content">
          <center><h1>Hello, I am Yashodhan Gupta</h1>
          <br />
          <p>A creative and dedicated web developer with a deep passion for crafting seamless user experiences and building powerful applications. </p>
          <p>I specialize in modern frontend and backend technologies, bringing ideas to life with code.</p>
          </center>
        </div>
      </div>

      {/* About Section Below (Without Stars) */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
