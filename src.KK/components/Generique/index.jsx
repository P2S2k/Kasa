import { useState } from "react"
import downarrow from "../../assets/downarrow.png"
import "../../utils/style/apropos.css"

function Generique({ title, content }) {
    const arrow = <img src={downarrow} alt="Descritpion detail" />
    const [classname, setClassname] = useState("closed")

    return (
        <div className="engagements">
            <div className="barretext">
                <span className="text">{title}</span>
            </div>
            <button
                className="arrow"
                onClick={() =>
                    setClassname(classname === "open" ? "closed" : "open")
                }
            >
                {arrow}
            </button>
            <div className={classname}>
                {Array.isArray(content)
                    ? content.map((equip) => <li key={equip}>{equip}</li>)
                    : content}
            </div>
        </div>
    )
}

export default Generique
