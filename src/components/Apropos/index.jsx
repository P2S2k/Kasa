import "../../utils/style/main.css"
import "../../utils/style/apropos.css"
import Apropospic from "./image"
import { Aprop } from "../../datas/Aprop"
import Generique from "../Generique"

function Propos(aprop) {
    return (
        <div>
            <Apropospic />
            <div className="propos">
                {Aprop.map((aprop) =>
                <Generique title = {aprop.name} content = {aprop.title} />)}
            </div>
        </div>
    )
}

export default Propos
