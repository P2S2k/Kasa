import Equipments from "./Equipments"
import Description from "./Description"

function Descrequip({appart}) {
    return (
        <div className="descrequip">
            <Description description={appart.description} />
            <Equipments equipments={appart.equipments} />
        </div>
    )
}

export default Descrequip
