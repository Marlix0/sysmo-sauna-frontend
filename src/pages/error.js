import {Link} from "react-router-dom";
import "./error.css";
import Error404 from "./image 1.png";

const Error = () =>{
    return(
        <div id="Main">
            <title>Error 404</title>
            <img src={Error404} id="Error-img" />
            <div id='Error-content'>
                <h1>Oj! Wystąpił błąd.</h1>
                <p>Możliwe, że strona została usunięta, jej nazwa została zmieniona lub jest tymczasowo niedostępna. Sprawdź, czy adres URL nie zawiera błędów, lub wróć na stronę główną</p>
                <Link to="/">
                    <button id='Return-button'>Wróć</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;