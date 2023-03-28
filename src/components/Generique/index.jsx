import { useState } from "react"
import downarrow from "../../assets/downarrow.png"
import "../../utils/style/collapse.css"

function Generique({ title, content }) {
    const arrow = <img src={downarrow} alt="detail" />
    const [classname, setClassname] = useState("closed")

    return (
        <div className={classname}>
            <div className="barretext">
                <span className="text">{title}</span>
                <button
                    onClick={() =>
                        setClassname(classname === "open" ? "closed" : "open")
                    }
                    className="arrow"
                >
                    {arrow}
                </button>
            </div>
            <div className="content">
                {Array.isArray(content)
                    ? content.map((equip) => <li key={equip}>{equip}</li>)
                    : content}
            </div>
        </div>
    )
}

export default Generique
