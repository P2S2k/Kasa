import "../../utils/style/apropos.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
//import { useParams } from "react-router-dom"
//import { Apparts } from "../../datas/Apparts"
import Propos from "../../components/Apropos"
//import { Link } from "react-router-dom"

function Apropos() {
    
        return (
            <div className="leaf">
                <Header></Header>
                <Propos />
                <Footer></Footer>
            </div>
        )
    
}

export default Apropos
