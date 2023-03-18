import "../../../utils/style/apropos.css"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Responsabilite() {
    const engarrow = <img src={downarrow} alt="Responsabilité detail" />
    const [classname, setClassname] = useState("closed")

    return (
        <div className="engagements">
            <div className="apbarretext">
                <span className="aptext">Responsabilité</span>
            </div>

            <div className={classname}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
            </div>
            <button
                className="engarrow"
                onClick={() =>
                    setClassname(
                        classname === "apopen" ? "closed" : "apopen"
                    )
                }
            >
                {engarrow}
            </button>
        </div>
    )
}

export default Responsabilite