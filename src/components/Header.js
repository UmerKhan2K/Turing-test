import React from 'react';
import logo from './logo.png';
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    background: '#f2f2f2',
    padding: '10px',
  },
  logoContainer: {
    marginRight: '10px',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  title: {
    fontSize: '20px',
    margin: '0',
  },
};

export default Header;
