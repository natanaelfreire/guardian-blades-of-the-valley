import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CreateAccount = () => {
  return (
    <div className="page-create-account">
      <header>
        <Link to="/">Back to Home</Link>
        <p>(LOGO)</p>
      </header>

      <div className="main">
        <h1>Create your account</h1>
        <form className="form-account">
          <fieldset>
            <div className="field">
              <input type="text" placeholder="Nickname" name="name" id="name"/>
            </div>

            <div className="field">
              <input type="text" placeholder="E-mail" name="email" id="email"/>
            </div>

            <div className="field">
              <input type="password" placeholder="Password" name="password" id="password"/>
            </div>

            <div className="field">
              <input type="password" placeholder="Confirm password" name="password" id="password"/>
            </div>
          </fieldset>

         <button type="submit">Create</button>
        </form>
      </div>
      

    </div>
  );
}

export default CreateAccount;