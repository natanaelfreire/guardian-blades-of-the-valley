import React from 'react';

import './styles.css';

const Home = () => {
  return (
    <div className="content">
      <header>
        <h1>Home - Guardian Blades</h1>
        <h2>Protect the valley with the power of your blade</h2>
        <a className="signup" href="/create-account">Sign Up</a>
      </header>

      <a className="playButton" href="/client">Play</a>
    </div>
  );
}

export default Home;