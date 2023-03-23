import "../../../utils/style/main.css"
import "../../../utils/style/appart.css"
import { Apparts } from "../../../datas/Apparts"
import { useParams } from "react-router-dom"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Description() {
    const desdarrow = <img src={downarrow} alt="Descritpion detail" />
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)
    const description = appart.description
    const [classname, setClassname] = useState("desclosed")
    return (
        <div className="desequip">
            <div className="barrede">
                <span className="barretext">Description</span>
                <button
                    className="barrearrow"
                    onClick={() =>
                        setClassname(
                            classname === "desopen" ? "desclosed" : "desopen"
                        )
                    }
                >
                    {desdarrow}
                </button>
            </div>
            <div className={classname}>{description}</div>
        </div>
    )
}

export default Description
