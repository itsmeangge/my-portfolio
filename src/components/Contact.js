import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <h2>Contact</h2>
      <p style={{ color: 'var(--muted)' }}>
        Want to work together? Email me at <strong>garciaangelmae@gmail.com</strong> or connect on LinkedIn.
      </p>
      <div style={{ marginTop: '1rem' }}>
        <a className="btn" href="mailto:garciaangelmae@mail.com">Email me</a>
      </div>
    </div>
  );
};

export default Contact;
