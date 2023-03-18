import "../../../utils/style/appart.css"
import emptystar from "../../../assets/emptystar.png"
import fullstar from "../../../assets/fullstar.png"

const fstar = <img src={fullstar} alt="" />
const estar = <img src={emptystar} alt="" />

function Stars({ rating }) {
    return (
        <div>
            <div>
                {[1, 2, 3, 4, 5].map((x) => (
                    <span className="rats" key={x}>
                        {x <= rating ? fstar : estar}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Stars
