import React, { useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
  
    if (!document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Remove script on component unmount
        if (script) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section
  id="contact"
  style={{
    padding: "50px 0",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#333",
  }}
>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>Contact Me</h2>
      <div
        className="visme_d"
        data-title="Simple Animated Contact Form"
        data-url="1jz00863-untitled-project"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="117290"
      ></div>
    </section>
  );
};

export default Contact;
