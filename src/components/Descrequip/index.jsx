import Generique from "../Generique"

function Descrequip({ appart }) {
    return (
        <div className="descrequip">
            <div className="barresize">
                <Generique title="Description" content={appart.description} />
            </div>
            <div className="barresize">
                <Generique title="Equipements" content={appart.equipments} />
            </div>
        </div>
    )
}

export default Descrequip
