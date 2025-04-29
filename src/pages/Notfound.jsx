import React from 'react';

const Notfound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={styles.link}>Go back to Home</a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  heading: {
    fontSize: '3rem',
    color: '#ff4c4c',
  },
  text: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem',
  },
};

export default Notfound;