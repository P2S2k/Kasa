import "../../utils/style/apropos.css"
import Apropospic from "./image"
import { Aprop } from "../../datas/Aprop"
import Collapse from "../Collapse"

function Propos(aprop) {
    return (
        <div>
            <Apropospic />
            <div className="propos">
                {Aprop.map((aprop) => (
                    <Collapse
                        key={aprop.name}
                        title={aprop.name}
                        content={aprop.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Propos
