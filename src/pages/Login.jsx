// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


function Login() {

  return (
    <div className="auth-container" style={{marginTop:'100px'}}>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          
          
          required
        />
        <input
          type="password"
          placeholder="Enter your passowrd"
          
          
          required
        />
        <button type="submit">login</button>
      </form>


      <div className="auth-links">
        <span>Register</span>
        <span> | </span>
        <span >Forget passowrd</span>
      </div>
    </div>
  );
}

export default Login;
