//import logo from "../logo.svg"
import "../../App.css"
import logo from "../../assets/LOGO.png"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "../../utils/style/accueil.css"

import coast from "../../assets/coast.png"

/*
const KasaLogo = styled.img`
    
    left: 0%;
    right: 83.04%;
    top: 2%;
    bottom: 0%;
    
`
*/

const Navbandeau = styled(Link)`
    position: absolute;
    top: 25%;
    bottom: 25%;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    /* or 34px */

    display: flex;
    align-items: flex-end;
    text-align: right;
    text-decoration-line: underline;

    color: #ff6060;
`

function Toto() {
    return (
        <div className="leaf-accueil">
            <div className="header-accueil">
                <img src={logo} alt="kasa" />
                <ul>
                    <Navbandeau className="accueil">Accueil</Navbandeau>
                    <Navbandeau className="apropos">A Propos</Navbandeau>
                </ul>
            </div>
            <div className="body-accueil">
                <div className="section-accueil">
                    <img src={coast} alt="la côte" />
                    <h1 >
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
            </div>
        </div>
    )
}
/*
function App() {
    return (
        
            
       
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
       
    )
}
 */
export default Toto
