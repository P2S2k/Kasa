import "../../utils/style/main.css"
import "../../utils/style/accueil.css"


function Banner({ bannerpic, bannertext }) {
    return (
        <div className="banner">
            <img src={bannerpic} alt="Paysage de montagnes" />
            <h1 className="slogan">{bannertext}</h1>
        </div>
    )
}

export default Banner
