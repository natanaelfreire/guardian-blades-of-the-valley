import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import api from '../../services/api';

interface User {
  id: number;
  name: string;
  nameInGame: string;
  email: string;
  password: string;
  token: string;
}

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem('gb-token') || undefined;

    if (token !== undefined) {
      axios.get<User>('http://192.168.1.6:3333/users', {
        params: {
          token
        }
      }).then(response => {
        if (response.status === 200) {
          setUserData(response.data);
          setIsLogged(true);
        }
      });
    }
  }, []); 
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmitLogin(event: FormEvent) {
    event.preventDefault();

    await api.post('login', formData).then(response => {
      if (response.status === 203) {
        return alert(response.data.message);
      }

      localStorage.setItem('gb-token', response.data.token);
      setIsLogged(true);
      window.location.reload(false);
    });
  }

  function handleLogout() {
    localStorage.removeItem('gb-token');
    setUserData(undefined);
    setIsLogged(false);
    window.location.reload(false);
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
          <span>
            {
              isLogged ? 
                ( <button className="loginButton" onClick={handleLogout}>Logout</button> ) :
                ( <><button
                      className="loginButton"
                    >
                      Login
                    </button>
                      | 
                    <Link to="/create-account"> Sign Up</Link> </> )
            }
          </span>

          <form onSubmit={handleSubmitLogin} className={isLogged ? 'hide' : 'loginForm'}>
            <fieldset>
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
            </fieldset>
            
            <h2>Don't have account?</h2>
            <Link to="/create-account">Sign Up</Link>
          </form>
        </div>
      </header>

      <div className="playBox">
        <div className="userName">Hello, {userData ? userData.name : 'visitor'}.</div>
        <Link to="/client">Play</Link>
      </div>
    </div>
  );
}

export default Home;