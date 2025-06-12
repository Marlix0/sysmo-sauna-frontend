import logo from './logo.svg';
import logoBalia from './assets/logoBalia.png';
import telephone from './assets/telephone-fill.png';
import email from './assets/envelope-fill.png';
import inst from './assets/instagram.png';
import fb from './assets/facebook.png';
import tiktok from './assets/tiktok.png';
import plus from './assets/plus-circle.png';
import user from './assets/user.png';
import SaunaVector from './assets/Vector.png';
import passShow from './assets/eye-open.svg';
import passHide from './assets/Hide.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function App() {


  useEffect(() => {
    const fetchRegisterData = async () => {
      const registerResult = await fetch('https://test1.sysmo.pl/api/register');
      const jsonResult = await registerResult.json();
    }
    fetchRegisterData();
  }, []);

  const Register = async () => {
    var firstName = document.querySelector('#Name-input').value;
    var surname = document.querySelector('#Surname-input').value;
    var email = document.querySelector('#Email-input').value;
    var password1 = document.querySelector('#Password-input').value;
    var password2 = document.querySelector('#Password-input2').value;
    if(firstName != "" && surname != "" && email != "" && password1 != "" && password2 != ""){
      document.querySelector('#nameError').innerHTML = "";
      document.querySelector('#surnameError').innerHTML = "";
      document.querySelector('#emailError').innerHTML = "";
      document.querySelector('#passwordError').innerHTML = "";
      if(password1 != password2) document.querySelector('#password2Error').innerHTML = "Hasła się nie zgadzają";
      else{
        document.querySelector('#password2Error').innerHTML = "";

        const registerData = {
          firstName : firstName,
          surname : surname,
          email : email,
          password : password1
        }
        const result = await fetch('https://test1.sysmo.pl/api/register', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(registerData)
        });

        const resultInJson = await result.json();
        console.log(resultInJson);
      }
    }
    else{
      if(firstName == "") document.querySelector('#nameError').innerHTML = "Pole jest puste";
      if(surname == "") document.querySelector('#surnameError').innerHTML = "Pole jest puste";
      if(email == "") document.querySelector('#emailError').innerHTML = "Pole jest puste";
      if(password1 == "") document.querySelector('#passwordError').innerHTML = "Pole jest puste";
      if(password2 == "") document.querySelector('#password2Error').innerHTML = "Pole jest puste";
    }

  }

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(passShow)

  const handleToggle = () => {
    if (type === 'password'){
      setIcon(passHide);
      setType('text');
    }
    else{
      setIcon(passShow);
      setType('password');
    }
  }

  const [password2, setPassword2] = useState("");
  const [type2, setType2] = useState("password");
  const [icon2, setIcon2] = useState(passShow)

  const handleToggle2 = () => {
    if (type2 === 'password'){
      setIcon2(passHide);
      setType2('text');
    }
    else{
      setIcon2(passShow);
      setType2('password');
    }
  }

  return (
    <div className="App">
    <title>Sauna</title>
      <header id="App-header">
        <div id="header-left">
          <img src={logoBalia} alt="Logo"/>
        </div>
        <div id="header-center">
          <img id='header-tel' src={telephone} alt="telephone" width="24px"/><span id='contact-phone'>+48 000 000 000</span>
          <img src={email} alt="email" width="32px"/><span id='contact-email'>kontakt@firma.pl</span>
        </div>
        <div id="header-right">
          <a href="#" id="add-notice"><img src={plus} alt="plus-icon" width="20px"/>Dodaj ogłoszenie</a>
          <button id="login-btn"><img src={user} alt='user' />Zaloguj się</button>
        </div>
      </header>
      <main>
        <div id='App-content'>
          <div id='Register-content'>
            <img id='Sauna-pic' src={SaunaVector} alt='sauna-pic'/>
            <div id='Register-div'>
              <h1 id='Register-title'>Utwórz swoje konto</h1>
              <p id='HaveAccount'>Masz już konto? <a>Zaloguj się</a></p>
              <div className='TextField-container'>
                <label htmlFor='Name-input'>Imię</label>
                <input type='text' id='Name-input' className='TextFields' placeholder='Wpisz imię...'></input>
                <p className='inputErrors' id='nameError'></p>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Surname-input'>Nazwisko</label>
                <input type='text' id='Surname-input' className='TextFields' placeholder='Wpisz nazwisko...'></input>
                <p className='inputErrors' id='surnameError'></p>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Email-input'>Email</label>
                <input type='email' id='Email-input' className='TextFields' placeholder='email@gmail.com'></input>
                <p className='inputErrors' id='emailError'></p>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Password-input'>Hasło</label>
                <input type={type} id='Password-input' className='TextFields' placeholder='Wpisz hasło...' onChange={(e) => setPassword(e.target.value)}></input>
                <span className='togglePassword' onClick={handleToggle}><img src={icon} alt='eye' /></span>
                <p className='passwordErrors' id='passwordError'></p>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Password-input2'>Potwierdź hasło</label>
                <input type={type2} id='Password-input2' className='TextFields' placeholder='Powtórz hasło...' onChange={(e) => setPassword(e.target.value)}></input>
                <span className='togglePassword' onClick={handleToggle2}><img src={icon2} alt='eye' /></span>
                <p className='passwordErrors' id='password2Error'></p>
              </div>
              <div className='TextField-container'>
                <button id='register-button' onClick={Register}>Zarejestruj się</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='App-footer'>
        <div id='Footer-top'>
          <div id='Footer-content'>
            <div id='Footer-slogan'>
              <img id='logoBalia' src={logoBalia} alt='lotus' />
              <p>Dbamy o Twój relaks ze SPA na wyciągnięcie ręki.</p>
            </div>
            <div id='Footer-contact'>
              <div className='contact-div'>
                <p><img src={telephone} alt='phone'/>+48 000 000 000</p>
              </div>
              <div className='contact-div'>
                <p><img src={email} alt='email'/>kontakt@firma.pl</p>
              </div>
              <div className='contact-div'>
                <p><img src={inst} alt='inst'/>inst</p>
              </div>
              <div className='contact-div'>
                <p><img src={fb} alt='fb'/>fb</p>
              </div>
              <div className='contact-div'>
                <p><img src={tiktok} alt='tiktok'/>TikTok</p>
              </div>
            </div>
          </div>
        </div>
        <div id='Footer-copyright'>
          <p>© 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
