import React from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify-icons/logos/angular";
import reactIcon from "@iconify-icons/logos/react";
import vueIcon from "@iconify-icons/logos/vue";
import "../styles/About.css"; // Make sure you create this CSS file

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-details">
          {/* Profile Image */}
          <div className="profile-image">
          <img src="/image.jpg" alt="Profile" />

          </div>

          {/* Bio and Tech Stack */}
          <div className="about-text">
            <p>
              Hi, I'm <strong>Yashodhan Gupta</strong>, currently pursuing <b>Bachelor of Engineering (B.E.) in Computer Engineering</b> from <b>AISSMS Institute of Information Technology, Pune.</b>
            </p>
            <p>I completed my <b>Polytechnic</b> from <b>AISSMS Polytechnic.</b> </p>
            <p>
            With expertise in <b>React.js, Node.js,</b> and <b>MongoDB,</b> I specialize in building scalable, high-performance applications that are not only functional but also intuitive and user-friendly. My passion lies in creating seamless user experiences, and I constantly strive to stay updated with the latest technologies and trends in the ever-evolving tech world.
            </p>
            <p>Outside of coding, I have a variety of hobbies that keep me inspired and balanced. I enjoy <b>sketching, painting, playing video games,</b> and exploring <b>new technologies.</b> </p>
            <p>
            Let’s collaborate and build something amazing together!
            </p>

            {/* Tech Stack Icons */}
            <div className="tech-icons">
  <Icon icon="logos:javascript" className="tech-icon" title="JavaScript" />

  <Icon icon="logos:mongodb" className="tech-icon" title="MongoDB" />
  <Icon icon="logos:html-5" className="tech-icon" title="HTML5" />
  <Icon icon="logos:css-3" className="tech-icon" title="CSS3" />
  <Icon icon="logos:git" className="tech-icon" title="Git" />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
