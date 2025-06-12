import {Link} from "react-router-dom";
import './saunaPost.css';
import saunaBg1 from './../assets/saunaBg1.jpg';
import bubble from './../assets/bubble.png';
import air from './../assets/air.png';
import oil from './../assets/oil.png';
import wood from './../assets/wood.png';
import types from './../assets/Types.png';
import Frame_11 from './../assets/Frame 11.png';
import logoBalia from './../assets/logoBalia.png';
import telephone from './../assets/telephone-fill.png';
import email from './../assets/envelope-fill.png';
import inst from './../assets/instagram.png';
import fb from './../assets/facebook.png';
import tiktok from './../assets/tiktok.png';
import ScrollToTop from './ScrollToTop.jsx';

const SaunaPost = () =>{
 return(
    <div id="postContainer">
        <ScrollToTop />
        <div id="upperPost">
            <img src={Frame_11} width="504px" alt="saunaBg2" id="postImage" />
            <div id="postDescriptionDiv">
                <h1>jakaś sauna</h1>
                <p>jakiś opis!</p>
                <div id="postIconContainer">
                    <img src={bubble} alt="hydromasaż" width="96px" />
                    <img src={oil} alt="olejek" width="96px" />
                    <img src={wood} alt="drewno" width="96px" />
                    <img src={air} alt="aeromasaż" width="96px" />
                </div>
            </div>
        </div>
        <img src={types} id="typesImage" />
        <div className="singleOrder">
          <img src={saunaBg1} className="orderImg" />
          <p className="orderType">Jacek</p>
          <button id="callButton">Zadzwoń</button>
        </div>
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

export default SaunaPost;