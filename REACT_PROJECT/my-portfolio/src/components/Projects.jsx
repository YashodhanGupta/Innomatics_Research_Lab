import React from "react";
import "../styles/Projects.css"; // Import styles

// Sample project data with external links
const projectData = [
  {
    id: 1,
    title: "Food Order Website",
    image: "/food.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://innomatics-food.netlify.app/", // Add your external link
  },
  {
    id: 2,
    title: "Innomatics Clone",
    image: "/innomatics.png",
    languages: "HTML, CSS",
    link: "https://innomatics-clone1.netlify.app/", // Add your external link
  },
  {
    id: 3,
    title: "Memory Game",
    image: "/memory.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://innomatics-memorygame.netlify.app/", // Add your external link
  },
  {
    id: 4,
    title: "E-Commerce Website",
    image: "/commerce.png",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://innomatics-task4.netlify.app/", // Add your external link
  },
  {
    id: 5,
    title: "Coffee Order Website",
    image: "/coffee.jpg",
    languages: "HTML, CSS, JAVASCRIPT",
    link: "https://innomatics-coffee.netlify.app/", // Add your external link
  },
  {
    id: 6,
    title: "Multi Disease Prediction System",
    image: "/doctor.jpg",
    languages: "PYTHON, MACHINE LEARNING, ARTIFICIAL INTELLIGENCE",
    link: "https://final-year-project-7z5p.onrender.com/", // Add your external link
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h1 className="project-title">{project.title}</h1>
            <p className="project-languages"><b>Tech Stack:-</b> {project.languages}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
