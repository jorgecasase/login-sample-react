import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>E-mail</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;