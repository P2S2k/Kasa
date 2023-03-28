import { useParams } from "react-router-dom"
import { Apparts } from "../../datas/Apparts"
import Locpictures from "../../components/Locpictures"
import Locinfos from "../../components/Locinfos"
import Descrequip from "../../components/Descrequip"
import { Navigate } from "react-router-dom"

function Appart() {
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)

    if (!appart) {
        return <Navigate to="/404" />
    } else {
        return (
            <div>
                <Locpictures appart={appart} />
                <Locinfos appart={appart} />
                <Descrequip appart={appart} />
            </div>
        )
    }
}

export default Appart
