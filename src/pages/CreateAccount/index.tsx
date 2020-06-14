import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const history = useHistory();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert('Password and Confirm password must be the same.');
    }

    await api.get('users', {
      params: {
        name: formData.name
      }
    }).then(response => {
      if (response.status === 203) {
        api.post('users', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }).then(response => {
          const token = response.data.token;
  
          localStorage.setItem('gb-token', token);
          alert('Account created!');
          history.push('/');
        });
      } else return alert('Nickname is already taken.');
    });
  }

  return (
    <div className="page-create-account">
      <header>
        <Link to="/">Back to Home</Link>
        <p>(LOGO)</p>
      </header>

      <div className="main">
        <h1>Create your account</h1>
        <form className="form-account" onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <input type="text" placeholder="Nickname" required={true} name="name" id="name" onChange={handleInputChange}/>
            </div>

            <div className="field">
              <input type="text" placeholder="E-mail" required={true} name="email" id="email" onChange={handleInputChange}/>
            </div>

            <div className="field">
              <input type="password" placeholder="Password" required={true} name="password" id="password" onChange={handleInputChange}/>
            </div>

            <div className="field">
              <input type="password" placeholder="Confirm password" required={true} name="confirmPassword" id="confirmPassword" onChange={handleInputChange}/>
            </div>
          </fieldset>

         <button type="submit">Create</button>
        </form>
      </div>
      

    </div>
  );
}

export default CreateAccount;