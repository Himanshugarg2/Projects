import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Skills = () => (
  <section id="skills" className="skills-section bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Skills</h2>
      <ul className="list-group">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">Python</li>
      </ul>
    </div>
  </section>
);

export default Skills;
