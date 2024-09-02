import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { border, borderBottom, height, width } from '@mui/system';

function Home() {
  const greetingStyle = {
    fontSize: '4rem', 
    color: '#f39c12', 
    textAlign: 'center', 
    marginTop: '50px',
  };

  const paragraphStyle = {
    fontSize: '1.5rem', 
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '20px', 
  };

  const buttonStyle = {
    display: 'block', 
    margin: '70px 100px 0 0', 
    padding: '10px 20px', 
    fontSize: '1.2rem', 
    height: '300px',
    width: '400px',
    float: 'right',
    borderRadius: '50%',
  
  };

  return (
    <div>
      <h1 style={greetingStyle}>HOLAAAAAAAAAAAAAAA!</h1>
      <p style={paragraphStyle}>Riete ya.</p>
      <Link to="/about-us" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={buttonStyle}>
          COMENZEMOS
        </Button>
      </Link>
    </div>
  );
}

export default Home;
