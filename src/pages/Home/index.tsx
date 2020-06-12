import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  useEffect(() => {}, []);
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('login', formData).then(response => {
      const authToken = response.data;

      if (response.status === 203) {
        return alert(authToken.message);
      } 

      localStorage.setItem('gb-token', authToken);
      window.location.reload(false);
    });
  }


  return (
    <div className="page-home">
      <header>
        <div className="logo-description">
          <p>(LOGO)</p>
          <h1>Protect the valley <br />
           with the power of your blade.</h1>
        </div>
        
        <div className="loginBox">
          <span> <button className="loginButton">Login</button> | <Link to="/create-account">Sign Up</Link></span>

          <form onSubmit={handleSubmit}>
            <input type="text"
              placeholder="Nickname"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
            <input type="password" 
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
            <button type="submit">Enter</button>
            <h2>Don't have account?</h2>
            <Link className="signup" to="/create-account">Sign Up</Link>
          </form>
        </div>
      </header>

      <div className="playBox">
        <Link to="/client">Play</Link>
      </div>
    </div>
  );
}

export default Home;