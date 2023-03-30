import "../../utils/style/main.css"
import "../../utils/style/appart.css"
import arrowleft from "../../assets/VectorL.png"
import arrowright from "../../assets/VectorR.png"
import { useState } from "react"

function Locpictures({ appart }) {
    const pics = appart.pictures
    let initialCount = 0
    const [count, setCount] = useState(initialCount)

    if (pics.length === 1) {
        return (
            <div className="pageappart">
                <div className="counter">{count+1}/{pics.length}</div>
                <div className="photostick">
                    <img className="images" src={pics[count]} alt="" />
                </div>
            </div>
        )
    } else {
        console.log (count)
        console.log (pics.length)
        if (count === pics.length) {
            setCount(initialCount)
        }
        if (count === -1) {
            setCount(pics.length - 1)
        }
        return (
            <div className="pageappart">
                <div className="photostick">
                    <div className="counter">{count+1}/{pics.length}</div>
                    <button
                        className="picright"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        <img className="picarrowright" src={arrowright} alt="" />
                    </button>

                    <button
                        className="picleft"
                        onClick={() => setCount((count) => count - 1)}
                    >
                        <img
                            className="picarrowleft"
                            src={arrowleft}
                            alt="previous pic"
                        />
                    </button>
                    <img className="images" src={pics[count]} alt="" />
                </div>
            </div>
        )
    }
}

export default Locpictures
