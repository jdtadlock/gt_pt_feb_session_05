import React from 'react';

const Landing = props => (
  <header>
    <h3>Logo</h3>

    <p>{props.isAuth}</p>

    <nav>
      <span>{props.isAuth ? localStorage.getItem('user_email') : <button onClick={props.auth.login}>Login</button>}</span>

      {props.isAuth ? <span onClick={props.auth.logout}>Logout</span> : ''}
    </nav>
  </header>
);

export default Landing;