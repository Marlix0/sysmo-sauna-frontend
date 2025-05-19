import logo from './logo.svg';
import logoBalia from './assets/logoBalia.png';
import telephone from './assets/telephone-fill.png';
import email from './assets/envelope-fill.png';
import inst from './assets/instagram.png';
import fb from './assets/facebook.png';
import tiktok from './assets/tiktok.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>

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
