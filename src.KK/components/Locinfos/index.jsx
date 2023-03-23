import "../../utils/style/main.css"
import "../../utils/style/appart.css"
import Stars from "./Rating"
import Tags from "./Tags"

function Locdetails({appart}) {
        return (
            <div className="details">
                <div className="leftdetails">
                    <div className="title">{appart.title}</div>
                    <div className="location">{appart.location} </div>
                    <div className="tags"><Tags></Tags></div>
                </div>
                <div className="rightdetails">
                    <div className="host">
                        <div className="hostname">{appart.host.name}</div>
                        <img
                            className="hostpic"
                            src={appart.host.picture}
                            alt=""
                        />
                    </div>
                    <div className="rating">
                        <Stars rating={appart.rating} />
                    </div>
                </div>
            </div>
        )
    
}

export default Locdetails

