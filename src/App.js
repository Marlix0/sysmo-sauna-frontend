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
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="App-header">
        <div id="header-left">
          <img src={logoBalia} alt="Logo"/>
        </div>
        <div id="header-center">
          <img id='header-tel' src={telephone} alt="telephone" width="24px"/><span id='contact-phone'>+48 000 000 000</span>
          <img src={email} alt="email" class="icons" width="32px"/><span id='contact-email'>kontakt@firma.pl</span>
        </div>
        <div id="header-right">
          <a href="#"><img src={plus} alt="plus-icon" class="icons" width="20px"/>Dodaj ogłoszenie</a>
          <button class="login-btn"><img src={user} alt='user' />Zaloguj się</button>
        </div>
      </header>
      <main>
        <div id='App-content'>
          <div id='Register-content'>
            <img id='Sauna-pic' src={SaunaVector} alt='sauna-pic'/>
            <div id='Register-div'>
              <p id='Register-title'>Utwórz swoje konto</p>
              <p id='HaveAccount'>Masz już konto? <a>Zaloguj się</a></p>
              <div className='TextField-container'>
                <label htmlFor='Name-input'>Imię</label>
                <input type='text' id='Name-input' className='TextFields' placeholder='Wpisz imię...'></input>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Surname-input'>Nazwisko</label>
                <input type='text' id='Surname-input' className='TextFields' placeholder='Wpisz nazwisko...'></input>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Email-input'>Email</label>
                <input type='email' id='Email-input' className='TextFields' placeholder='email@gmail.com'></input>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Password-input'>Hasło</label>
                <input type='password' id='Password-input' className='TextFields' placeholder='Wpisz hasło...'></input>
              </div>
              <div className='TextField-container'>
                <label htmlFor='Password-input2'>Potwierdź hasło</label>
                <input type='password' id='Password-input2' className='TextFields' placeholder='Powtórz hasło...'></input>
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
