import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
      <p style={{ color: 'var(--muted)' }}>Selected projects.</p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a className="btn" href={p.link} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
