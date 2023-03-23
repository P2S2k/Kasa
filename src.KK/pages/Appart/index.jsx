import "../../utils/style/main.css"
import { useParams } from "react-router-dom"
import { Apparts } from "../../datas/Apparts"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Locpictures from "../../components/Locpictures"
import Locinfos from "../../components/Locinfos"
import Desequip from "../../components/Descrequip"


function Appart() {
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)

    if (!appart) {
        alert("c'est la m...")
    } else {
        return (
            <div>
                <Locpictures appart={appart} />
                <Locinfos appart={appart} />
                <Desequip></Desequip>
            </div>
        )
    }
}

export default Appart
