import Generique from "../Generique"

function Descrequip({appart}) {
    return (
        <div className="descrequip">
            <Generique title="Description" content={appart.description}/>
            <Generique title="Equipements" content={appart.equipments} />
        </div>
    )
}

export default Descrequip
