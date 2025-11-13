import React from 'react';

const About = () => {
  return (
    <div className="section">
      <h2>About</h2>
      <div className="about-grid" style={{ marginTop: '1rem' }}>
        <div>
          <p style={{ color: 'var(--muted)' }}>
            I'm a web developer focusing on building practical web applications with React.
            I enjoy creating UI, and learning new technologies.
          </p>
          <ul style={{ marginTop: '1rem', color: 'var(--muted)' }}>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Java</li>
            <li>Responsive design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <aside className="card">
          <h4>Quick Facts</h4>
          <p style={{ color: 'var(--muted)' }}>
            Open to freelance. Based in Cabuyao, Laguna.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default About;
