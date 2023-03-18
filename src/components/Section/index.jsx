import "../../utils/style/main.css"
import "../../utils/style/accueil.css"
import coast from "../../assets/coast.png"

function Section() {
    return (
            
                <div className="section">
                    <img src={coast} alt="la côte" />
                    <h1 className="slogan">Chez vous, partout et ailleurs</h1>
                </div>
    )
}

export default Section
