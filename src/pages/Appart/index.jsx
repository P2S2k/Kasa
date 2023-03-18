import "../../utils/style/main.css"
import { useParams } from "react-router-dom"
import { Apparts } from "../../datas/Apparts"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Locpictures from "../../components/Locpictures"
import Locinfos from "../../components/Locinfos"
import Descrequip from "../../components/Descrequip"
import { Link } from "react-router-dom"



function Appart() {
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)

    if (!appart) {
        <Link rel="stylesheet" to="../Error" />
    } else {
        return (
            <div className="leaf">
                <Header></Header>
                <Locpictures appart={appart} />
                <Locinfos appart={appart} />
                <Descrequip appart={appart} />
                <Footer></Footer>
            </div>
        )
    }
}

export default Appart