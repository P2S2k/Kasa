import "../../../utils/style/appart.css"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Description({description}) {
    const arrow = <img src={downarrow} alt="Descritpion detail" />
    const [classname, setClassname] = useState("closed")
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
                        classname === "open" ? "closed" : "open"
                    )
                }
            >
                {arrow}
            </button>
        </div>
    )
}

export default Description
