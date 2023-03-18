import "../../utils/style/main.css"
import "../../utils/style/error.css"
import { Link } from "react-router-dom"

function Katcenkat() {
    return (
        <div className="bodyerror">
                <p className="cat100cat">404</p>
                <p className="oups">
                    Oups la page que vous demandez n'existe pas
                </p>
                <Link className="error-nav" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Katcenkat
