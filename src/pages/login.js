import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './login.css';
import loginImage from './../assets/Vector.png';
import eyeIcon from './../assets/eye-open.svg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://test1.sysmo.pl/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Niepoprawny e-mail lub hasło');
      }

      setSuccess('Zalogowano!');

      console.log('Zalogowano:', data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="loginContainer">
      <div className="image-container">
        <img src={loginImage} alt="login" />
      </div>
      <div className="form-container">
        <h2>Zaloguj się</h2>
        <p><small>Nie masz konta? <Link to="/register">Utwórz teraz</Link></small></p>
        <form onSubmit={handleLogin}>
          <label className="name">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            className="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="name">Hasło</label>
          <div className="passwordInput">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Hasło"
              required
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={eyeIcon}
              alt={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
              className="eye"
              onClick={togglePassword}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <button type="submit">Zaloguj się</button>
          {success && <p className="error">{success}</p>}
          {error && <p className="error">{error}</p>}
        </form>
        <a href="#" className="forgot">Zapomniałeś hasła?</a>
      </div>
    </div>
  );
}



export default LoginPage;