import React from 'react';

const Footer = () => {
  return (

    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Iron Works Ltd All rights reserved.</p>
        <p style={styles.text}>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> | 
          <a href="/contact us" style={styles.link}>Contact Us</a> | 
          <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 0',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    text: {
      margin: '5px 0',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      marginLeft: '10px',
    },
  };

export default Footer;