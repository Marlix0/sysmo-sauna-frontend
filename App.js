
import React, { useState } from 'react';
import './App.css';
import loginImage from './sauna.jpg';
import eyeIcon from './Vector.png';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={loginImage} alt="login" />
      </div>
      <div className="form-container">
        <h2>Zaloguj się</h2>
        <p><small>Nie masz konta? <a href="#">Utwórz teraz</a></small></p>
        <form>
          <label className="name">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            className="input"
          />
          <label className="name">Hasło</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Hasło"
              required
              className="input"
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
        </form>
        <a href="#" className="forgot">Zapomniałeś hasła?</a>
      </div>
    </div>
  );
}

export default App;
