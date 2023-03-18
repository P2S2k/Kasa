import "../../utils/style/main.css"
import "../../utils/style/apropos.css"
import Apropospic from "./image"
import Fiabilite from "./Fiabilite"
import Respect from "./Respect"
import Service from "./Service"
import Responsabilite from "./Responsabilite"

function Propos() {
    return (
        <div>
            <Apropospic />
            <div className="propos">
                <Fiabilite />
                <Respect />
                <Service />
                <Responsabilite />
            </div>
        </div>
    )
}

export default Propos
