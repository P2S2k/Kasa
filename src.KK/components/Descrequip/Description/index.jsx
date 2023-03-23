import "../../../utils/style/main.css"
import "../../../utils/style/appart.css"
import { Apparts } from "../../../datas/Apparts"
import { useParams } from "react-router-dom"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Description() {
    const arrow = <img src={downarrow} alt="Descritpion detail" />
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)
    const description = appart.description
    const [classname, setClassname] = useState("desclosed")
    return (
        <div className="desequip">
            
            <div className="barretext">
                <span className="text">Description</span>
            </div>

            <div className={classname}>{description}</div>
            <button
                className="arrow"
                onClick={() =>
                    setClassname(
                        classname === "desopen" ? "desclosed" : "desopen"
                    )
                }
            >
                {arrow}
            </button>
        </div>
    )
}

export default Description
