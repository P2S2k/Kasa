import "../../../utils/style/apropos.css"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Fiabilite() {
    const engarrow = <img src={downarrow} alt="Fiabilité detail" />
    const [classname, setClassname] = useState("closed")

    return (
        <div className="engagements">
            <div className="apbarretext">
                <span className="aptext">Fiabilité</span>
            </div>

            <div className={classname}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
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

export default Fiabilite
