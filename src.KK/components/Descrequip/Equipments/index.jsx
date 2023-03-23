import "../../../utils/style/main.css"
import "../../../utils/style/appart.css"
import { Apparts } from "../../../datas/Apparts"
import { useParams } from "react-router-dom"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

const arrow = <img src={downarrow} alt="Descritpion detail" />

function Equipments() {
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)
    const [classname, setClassname] = useState("eqclosed")
    if (!appart) {
        alert("c'est la m...")
    } else {
        
            return (
                <div className="desequip">
                    <div className="barretext"><span className="text">Equipements</span></div>
                    
                    <div className={classname}>
                        {appart.equipments.map((equip) => (
                            <p key={`${equip} - ${id}`}>{equip}</p>
                        ))}
                    </div>
                    <button
                        className="arrow"
                        onClick={() =>
                            setClassname(
                                classname === "eqopen"
                                    ? "eqclosed"
                                    : "eqopen"
                            )
                        }
                    >
                        {arrow}
                    </button>
                </div>
            )
        
    }
}

export default Equipments
