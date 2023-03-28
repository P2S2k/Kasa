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
                <Generique key={aprop.name} title = {aprop.name} content = {aprop.content} />)}
            </div>
        </div>
    )
}

export default Propos
