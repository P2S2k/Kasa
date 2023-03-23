import "../../../utils/style/main.css"
import "../../../utils/style/apropos.css"
import { useState } from "react"
import downarrow from "../../../assets/downarrow.png"

function Service() {
    const engarrow = <img src={downarrow} alt="Service detail" />
    const [classname, setClassname] = useState("closed")

    return (
        <div className="engagements">
            <div className="apbarretext">
                <span className="aptext">Service</span>
            </div>

            <div className={classname}>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
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

export default Service
