import "../../../utils/style/appart.css"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

const arrow = <img src={downarrow} alt="Descritpion detail" />

function Equipments({ equipments }) {
    const [classname, setClassname] = useState("closed")
    return (
        <div className="desequip">
            <div className="barretext">
                <span className="text">Equipements</span>
            </div>

            <div className={classname}>
                {equipments.map((equip) => (
                    <li key={equip}>{equip}</li>
                ))}
            </div>
            <button
                className="arrow"
                onClick={() =>
                    setClassname(classname === "open" ? "closed" : "open")
                }
            >
                {arrow}
            </button>
        </div>
    )
}

export default Equipments
