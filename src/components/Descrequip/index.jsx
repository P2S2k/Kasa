import Collapse from "../Collapse"

function Descrequip({ appart }) {
    return (
        <div className="descrequip">
            <div className="barresize">
                <Collapse title="Description" content={appart.description} />
            </div>
            <div className="barresize">
                <Collapse title="Equipements" content={appart.equipments} />
            </div>
        </div>
    )
}

export default Descrequip
