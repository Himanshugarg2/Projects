import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Projects = () => (
  <section id="projects" className="projects-section bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Projects</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Breeze Travel App</strong> - Developed a travel app using React for a user-friendly trip booking interface. Implemented features for destination selection, travel package management, and user preferences. Built a robust backend using Node.js and Express, managing user authentication and trip data, and integrated APIs to fetch real-time travel information.
        </li>
        <li className="list-group-item">
          <strong>Quiz App</strong> - Built a quiz app using HTML, CSS, and React.js for an interactive frontend experience. Developed a dynamic quiz interface with real-time question rendering and user score tracking. Utilized Express for backend development to handle API requests, quiz data, and user management.
        </li>
        <li className="list-group-item">
          <strong>Air Quality Index Monitoring</strong> - Developed a website to monitor air quality and provide medical advice for respiratory conditions like asthma. Utilized HTML, CSS, JavaScript, and integrated the AQI CN API to fetch real-time data. Implemented LLMs for generating medical suggestions.
        </li>
        <li className="list-group-item">
          <strong>eCommerce Website</strong> - Created an eCommerce website for GI-tagged products with comprehensive features using HTML, CSS, JS, OHP, and Razor Pay API. Provided a complete online shopping experience with payment integration.
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
