import "../../utils/style/apropos.css"
import { Aprop } from "../../datas/Aprop"
import Collapse from "../Collapse"
import Banner from "../Banner"
import mountain from "../../assets/mountain.png"


function Propos() {
    return (
        <div>
            <Banner bannerpic={mountain} />
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
