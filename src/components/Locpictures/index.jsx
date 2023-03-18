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
                <div className="photostick">
                    <img className="images" src={pics[count]} alt="" />
                </div>
            </div>
        )
    } else {
        if (count === pics.length) {
            setCount(initialCount)
        }
        if (count === -1) {
            setCount(pics.length - 1)
        }
        return (
            <div className="pageappart">
                <div className="photostick">
                    <button
                        className="right"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        <img className="arrowright" src={arrowright} alt="" />
                    </button>

                    <button
                        className="left"
                        onClick={() => setCount((count) => count - 1)}
                    >
                        <img
                            className="arrowleft"
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
