import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="page-home">
      <header>
        <div className="logo-description">
          <p>(LOGO)</p>
          <h1>Protect the valley <br />
           with the power of your blade.</h1>
        </div>
        
        <Link className="signup" to="/create-account">Sign Up</Link>
      </header>

      <div className="buttonBox">
        <Link to="/client">Play</Link>
      </div>
    </div>
  );
}

export default Home;