import {Link} from "react-router-dom";
import './main.css';
import logoBalia from './../assets/logoBalia.png';
import telephone from './../assets/telephone-fill.png';
import email from './../assets/envelope-fill.png';
import inst from './../assets/instagram.png';
import fb from './../assets/facebook.png';
import tiktok from './../assets/tiktok.png';
import plus from './../assets/plus-circle.png';
import user from './../assets/user.png';
import saunaBackground from "./../assets/saunaBackground.jpg";
import saunaBg1 from './../assets/saunaBg1.jpg';
import { useState, useEffect } from 'react';

const MainPage = () =>{
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://test1.sysmo.pl/api/rentposts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const getImageUrl = (photo_id) => {
    // Replace this with your actual image URL construction logic
    return `https://test1.sysmo.pl/storage/photos/${photo_id}.jpg`;
  };

    return(
        <div className="App">
        <title>Sauna</title>
        <div id="sauna-background" style={{backgroundImage: `url(${saunaBackground})`}}>
            <header id="Main-header">
              <div id="header-left">
                <img src={logoBalia} alt="Logo"/>
              </div>
              <div id="header-center">
                <img id='header-tel' src={telephone} alt="telephone" width="24px"/><span id='contact-phone'>+48 000 000 000</span>
                <img src={email} alt="email" width="32px"/><span id='contact-email'>kontakt@firma.pl</span>
              </div>
              <div id="header-right">
                <a href="#" id="add-notice"><img src={plus} alt="plus-icon" width="20px"/>Dodaj ogłoszenie</a>
                <Link to="/login"><button id="login-btn"><img src={user} alt='user' />Zaloguj się</button></Link>
              </div>
            </header>
            <div id="orderSearch">
              <h1 id="orderTitle">Czas na relaks w SPA?</h1>
              <p id="orderSubtitle">Pozwól sobie na odrobinę luksusu - zarezerwuj pobyt w SPA i poczuj różnicę już dziś.</p>
              <div id="orderCard">
                <div id="orderCardTop">
                  <button id="orderRV">Wynajem kampera</button>
                  <button id="orderRest">Noclegi</button>
                  <button id="orderMobileSauna">Wynajem sauny mobilnej</button>
                </div>
                <div id="orderCardBottom">
                  <div id="orderSearchInputs">
                    <input id="citySearch" type="text" placeholder="Wpisz lokalizację (miasto)" />
                    <input id="dateSearch" type="date" />
                  </div>
                  <button id="orderSearchButton">
                    Szukaj
                  </button>
                </div>
              </div>
            </div>
          </div>
            <main>
              <h1 id="resultTitle">Wyniki:</h1>
              <div id="orders">
                {posts.map((post, index) => (
                  <Link to={"/saunaPost"}>
                  <div className="singleOrder" key={index}>
                    <img src={saunaBg1} className="orderImg" />
                    <p className="orderLocation">Poznań, Polska</p>
                    <p className="orderType">{post.title}</p>
                  </div></Link>
                ))}
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
};

export default MainPage;
