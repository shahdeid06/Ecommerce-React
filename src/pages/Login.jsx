import { useState } from 'react';
import axios from 'axios';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fakestoreapi.com/auth/login', {
      username : email,
      password : password
    })
    .then(response => {
      console.log(response.data);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isLoggedIn', 'true');
    })
    .catch(error => {
      console.error( 'the problem is', error);
      alert('Write syntex right')
    }) 
  }

  return (
    <div className="auth-container" style={{marginTop:'100px'}}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your passowrd" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>login</button>
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
